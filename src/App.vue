<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Data v-if="currentView == 'Data'" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Data from "./components/Data/Data.vue";

@Options({
  components: {
    HelloWorld,
    Data,
  },
  data() {
    return { currentView: "Data" };
  },
})
export default class App extends Vue {}
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
</style>
