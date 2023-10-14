<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <wj-flex-grid :items-source="data">
    <!-- <wj-flex-grid-column binding="Identifier" header="Identifier"></wj-flex-grid-column> -->
    <!-- <wj-flex-grid-column binding="Department" header="Department"></wj-flex-grid-column> -->
  </wj-flex-grid>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.vue2.grid';
import '@grapecity/wijmo.vue2.grid.filter';
import getBigFileCsv from "@/api/getBigFileCsv";

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    this.data = await getBigFileCsv()
    console.log(this.data);
  }
}
</script>

<style>
/* @import "./node_modules/@grapecity/wijmo.styles/wijmo.css"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
  @import '../node_modules/@grapecity/wijmo.styles/wijmo.css';
</style>
