<template>
  <h1 class="mb-4 text-center H1">台灣各地天氣</h1>
  <div class="row">
    <div v-for="weather in weatherData" :key="weather.zh_city" class="col-md-4 mb-4">
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title">{{ weather.city }} ({{ weather.district }})</h5>
          <p class="card-text">溫度: {{ weather.weather.main.temp }}°C</p>
          <p class="card-text">描述: {{ weather.weather.weather[0].description }}</p>
          <p class="card-text">體感溫度: {{ weather.weather.main.feels_like }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const weatherData = ref([])
    onMounted(() => {
      console.log("try")
      api
        .getCategory()
        .then((res) => {
          weatherData.value = res
        })
        .catch((error) => {
          console.error(error)
        })
      console.log("get")
    })
    return {
      weatherData
    }
  },
  // async created() {
  //   try {
  //     // 獲取用戶位置
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         // 發送位置數據到後端
  //         const data = await weatherService.getWeatherData({ latitude, longitude });
  //         this.weatherData = data;
  //       }, (err) => {
  //         this.error = err;
  //         this.loading = false;
  //       });
  //     } else {
  //       this.error = new Error('Geolocation is not supported by this browser.');
  //       this.loading = false;
  //     }
  //   } catch (err) {
  //     this.error = err;
  //   } finally {
  //     this.loading = false;
  //   }
  // },
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
