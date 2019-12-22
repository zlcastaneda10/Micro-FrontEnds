<template>
  <div class="weather">
      <div v-if="submitted">
            <p> {{weather.name}}</p>
            <span class="temp">{{weather.temp}} °C</span>
            <p>{{weather.description}}</p>
            <div class="highlow">High: {{ weather.high }}° C. Low: {{ weather.low }}° C.</div>
      </div>

      <div v-else>
            <p> {{weather.name}}</p>
            <span class="temp">{{weather.temp}} °C</span>
            <p>{{weather.description}}</p>
            <div class="highlow">High: {{ weather.high }}° C. Low: {{ weather.low }}° C.</div>
      </div>
      <br>

    <form @submit.prevent="getWeather">
      <label htmlFor="input-a"> City: </label><input class= "city" type="text" placeholder="City" v-model="city">
    </form>
  </div> 
</template>
<script>

export default {
  name: 'app',
  components: {
    
  },
  methods:{
    getWeather(){

      this.weather = {};
      this.submitted = false;
      fetch(
        `http://api.openweathermap.org/data/2.5/find?q=${
          this.city
        }&units=metric&appid=9742dfbf75b27f069fec569a95a81eaf`
      )
        .then(response => response.json())
        .then(response => {
          let data = response.list[0];
          this.submitted = true;
          this.weather.name = data.name;
          this.weather.description = data.weather[0].main;
          this.weather.temp = Math.round(data.main.temp);
          this.weather.high = Math.round(data.main.temp_max);
          this.weather.low = Math.round(data.main.temp_min);
        })
        .catch(error => console.log(error));
      this.city = "";

    }
  },
  data(){
    return {
      city: "Bogota",
      submitted: false,
      weather: {
        name: "Bogota",
        temp: "18",
        description: "Clouds"
        }
  };
}
}

</script>