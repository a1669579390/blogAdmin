<template>
  <div class="hello">
    <sideBar></sideBar>
  </div>
</template>

<script>
import sideBar from '../layout/index';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    sideBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 100%;
    height: 100vh;
  }
</style>
