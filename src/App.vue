<template>
  <div class="container">
    <div class="input-container">
      <my-input v-model.trim="query" placeholder="Search jokes..." />
      <span v-if="query.length > 2 || this.$store.getters.countJokes > 0" class="input-label">Found jokes: {{this.$store.getters.countJokes}}</span>
    </div>
    <preloader v-if="this.$store.state.isLoading" />
    <div v-else class="card-container">
      <card class="card-item" v-for="item in this.$store.state.jokes" :ket="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
  import MyInput from "./components/UI/MyInput.vue";
  import Card from "./components/Card.vue";
  import Preloader from "./components/UI/Preloader.vue";
  export default {
    components: {Preloader, MyInput, Card},
    data() {
      return {
        query: '',
        usedQuery: '',
        dateWriteQuery: Date.now()
      }
    },
    watch: {
      query: function (val) {
        // if(val.length % 3 === 0 && val.length > 2 && this.usedQuery !== this.query){
        //   this.$store.dispatch('getJokes', val)
        //   this.usedQuery = val
        // }
        this.dateWriteQuery = Date.now()
      }
    },
    mounted() {
      setInterval(()=>{
        if(this.query.length > 2 && Date.now() - this.dateWriteQuery > 500 && this.usedQuery !== this.query ){
          this.$store.dispatch('getJokes', this.query)
          this.usedQuery = this.query
        }
      }, 250)
    }

  }
</script>

<style>
  .container{
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 40px 20px;
  }
  .input-container {
    width: 100%;
    margin-top: 128px;
    max-width: 626px;
    margin-bottom: 60px;
  }
  .input-label{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #282626;
    margin-left: 36px;
  }
  .card-container{
    display: grid;
    grid-template-columns: repeat(6, 259px);
    grid-template-rows: 300px;
    grid-auto-rows: 150px;
    gap: 20px;
  }
  .card-item{
    grid-column-start: span 2;
    /*grid-row-start: span 3;*/
  }
  .card-item:nth-child(-n+2){
    grid-column-start: span 3;
  }
  .card-item:nth-child(-n+2) p{
    font-size: 20px;
  }
  @media screen and (max-width: 1900px) {
    .card-container {
      grid-template-columns: repeat(4, 250px);
      grid-template-rows: repeat(2, 300px);
    }

    .card-item {
      grid-column-start: span 2;
    }

    .card-item:nth-child(-n+2) {
      grid-column-start: span 4;
    }
  }
  @media screen and (max-width: 1200px) {
    .card-container {
      grid-template-columns: repeat(2, 250px);
      grid-template-rows: 220px;
      grid-auto-rows: 220px;
    }
    .card-item {
      grid-column-start: span 2;
    }

    .card-item:nth-child(-n+2) {
      grid-column-start: span 2;
    }
    .card-item:nth-child(-n+2) p{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    .card-container {
      grid-template-columns: 400px;
      grid-template-rows: 220px;
    }

    .card-item {
      grid-column-start: span 1;
    }

    .card-item:nth-child(-n+2) {
      grid-column-start: span 1;
    }
    .card-item:nth-child(-n+2) p{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px) {
    .card-container {
      grid-template-columns: 260px;
      grid-template-rows: 400px;
      grid-auto-rows: 400px;
    }

    .card-item {
      grid-column-start: span 1;
      padding: 15px!important;
    }

    .card-item:nth-child(-n+2) {
      grid-column-start: span 1;
    }
    .card-item:nth-child(-n+2) p{
      font-size: 16px;
    }
  }
</style>
