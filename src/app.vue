<template>
  <h1 class="mb-4 text-center">台灣各地天氣</h1>
  <div class="row" id="weather-cards">
    <div v-for="weather in weatherData" :key="weather.zh_city" class="col-md-4 mb-4">
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title">{{ weather.zh_city }} ({{ weather.en_city }})</h5>
          <p class="card-text">溫度: {{ weather.temp }}°C</p>
          <p class="card-text">描述: {{ weather.description }}</p>
          <p class="card-text">時間: {{ weather.data_time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weatherData: []
    }
  },
  async created() {
    const response = await fetch('/api/weather')
    this.weatherData = await response.json()
  }
}
</script>