<template>  
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-2">
        <form @submit.prevent="fetchFutureWeather">
          <div class="btn-group-vertical w-100" role="group" aria-label="Vertical button group" id="city-buttons">
            <button v-for="city in cities" :key="city" type="button" @click="selectCity(city)" class="btn btn-secondary" :class="{ active: city === selectedCity }">{{ city }}</button>
          </div>
        </form>
      </div>
      <div class="col-md-10">
        <h1 class="mb-4 text-center">未來天氣 - {{ selectedCity }}</h1>
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <canvas id="futureWeatherChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

export default {
  setup() {
    const cities = ref(['台北', '新北', '桃園', '台中', '台南', '高雄', '基隆', '新竹', '新竹縣', '苗栗', '彰化', '南投', '雲林', '嘉義', '屏東', '宜蘭', '花蓮', '台東', '澎湖'])
    const selectedCity = ref('台北')
    const forecastDataList = ref([])
    let chart = null

    const fetchFutureWeather = async () => {
      const response = await fetch('/api/future', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ city: selectedCity.value })
      })
      forecastDataList.value = await response.json()
      createChart()
    }

    const createChart = () => {
      const ctx = document.getElementById('futureWeatherChart').getContext('2d')
      const labels = forecastDataList.value.map(forecast => forecast.data_time)
      const data = forecastDataList.value.map(forecast => forecast.temp)

      if (chart) {
        chart.destroy()
      }

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '溫度 (°C)',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }

    const selectCity = (city) => {
      selectedCity.value = city
    }

    watch(selectedCity, fetchFutureWeather)

    onMounted(() => {
      fetchFutureWeather()
    })

    return {
      cities,
      selectedCity,
      forecastDataList,
      fetchFutureWeather,
      selectCity
    }
  }
}
</script>