<template>
  <div id="app">
    <h2>vue base</h2>
    <button @click="goVue">Vue</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="goReact">React</button>
    <div class="container-wraper">
      <div class="container">
        <h3>Vue应用</h3>
        <div id="vueContainer"></div>
        <!-- <iframe src="http://localhost:8800/"></iframe> -->
      </div>
      <div class="container">
        <h3>React应用</h3>
        <div id="reactContainer"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    goVue() {
      // this.$router.push("/vue-app");
      history.pushState(null, "/react-app", "/vue-app");
    },
    goReact() {
      // this.$router.push("/react-app");
      history.pushState(null, "/vue-app", "/react-app");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container-wraper {
  display: flex;
}
.container {
  width: 500px;
  height: 500px;
  border: 1px solid #00f;
  overflow-y: scroll;
}
</style>
