<template>
  <h1 class="mb-4 text-center H1">最近位置：{{ userLocation }} 天氣</h1>
  <div class="container">
    <div class="row">
      <div v-if="weatherData.length" class="col-md-6 mb-4" v-for="(data, index) in weatherData" :key="index">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title">{{ data.location }}</h5>
            <p class="card-text">溫度: {{ data.temperature }}</p>
            <p class="card-text">描述: {{ data.weatherDescription }}</p>
            <p class="card-text">風速: {{ data.windSpeed }}</p>
            <p class="card-text">資料更新時間: {{ data.lastUpdated }}</p>
            <p class="card-text">資料來源: {{ data.source }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import api from '@/api/index'
import { ref, onMounted, watch } from 'vue'

export default {
  setup() {
    const weatherData = ref([])
    const userLocation = ref('')

    onMounted(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            api
              .getCategory(latitude, longitude)
              .then((res) => {
                weatherData.value = res // 顯示所有返回的天氣數據
              })
              .catch((error) => {
                console.error(error)
              })
          },
          (error) => {
            console.error(error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    })

    // 監視 weatherData 的變化，並設置 userLocation
    watch(weatherData, (newData) => {
      if (newData.length > 0) {
        userLocation.value = newData[0].location
      }
    })

    return {
      weatherData,
      userLocation
    }
  }
}
</script>

<style lang="scss" scoped>
.H1{
  color: white;
}
.blank {
  width: 100%;
  height: 74px;
}
.reservation {
  padding: 72px 10vw;
  background-color: var(--beige);
  .reservation__description {
    margin-top: 40px;
    width: 100%;
    color: var(--brown);
    font-size: var(--font-l);
    font-weight: 600;
    text-align: center;
    img {
      width: 20px;
      margin: 0 4px;
    }
  }
  .reservation__icons {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    .reservation__icon {
      flex: 0 0 33%;
    }
  }
}
.performance {
  padding: 72px 10vw;
  background-color: var(--primary);

  .performance__items {
    margin-top: 64px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    .performance__item {
      flex: 0 0 calc((100% - 10vw) / 3);
    }
  }
  .button-block {
    width: 50vw;
    max-width: 320px;
    margin: 10vw auto 5vw auto;
  }
}

@media (max-width: 460px) {
  .blank {
    width: 100%;
    height: 46px;
  }
  .reservation {
    padding: 34px 15vw;
    .reservation__description {
      margin-top: 18px;
      font-size: var(--mobile-font-l);
    }
    .reservation__icons {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      .reservation__icon {
        flex: 0 0 100%;
      }
    }
  }

  .performance {
    padding: 34px 15vw 74px 15vw;
    .performance__items {
      margin-top: 34px;
      padding: 0;
      .performance__item {
        flex: 0 0 100%;
      }
    }
  }
}
</style>
