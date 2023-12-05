<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <t-card imgSrc="/1.jpg" width="300" imgHeight="150" >
       <template>
         我是summary
       </template>
       <template #footer>
          我是底部
       </template>
    </t-card>
    <t-card imgSrc='/1.jpg' summary="啦啦啦"/>
  </div>
</template>

<script>
import tCard from '../components/lib/card/src/t-card.vue'

export default {
  components: { tCard },
  name: 'App',
}
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
