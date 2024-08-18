import axios from './axios'


export default {
  // updateToken(token) {
  //   axios.updateToken(token)
  // },
  // getToken() {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post('YrwEUIccHZ/NF15vWoVvtL8h2bz9GHYr50vY2SQG1')
  //       .then((res) => {
  //         this.updateToken(res.cft)
  //       })
  //       .catch((error) => {
  //         reject(error)
  //       })
  //   })
  // },
  // login(username, password) {
  //   return new Promise((resolve, reject) => {
  //     const params = {
  //       username,
  //       password,
  //     }
  //     axios
  //       .post('api/auth/login', params)
  //       .then((res) => {
  //         if (res.code === Code.Success) {
  //           resolve(res.data)
  //         } else {
  //           throw res
  //         }
  //       })
  //       .catch((error) => {
  //         reject(error)
  //       })
  //   })
  // },
  getCategory(Latitude, Longitude) {
    const _params = {
      latitude: Latitude,
      longitude: Longitude
    };
    return new Promise((resolve, reject) => {
      axios
        .post('api/weather', _params, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
}
