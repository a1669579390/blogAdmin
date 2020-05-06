<template>
    <div class="shouye">
      <transition name="slide-fade" mode="out-in" appear>
        <list></list>
      </transition>
      <transition name="slide-fade" mode="out-in" appear>
        <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;margin-top:5%">
          <line-chart class="charts" :chart-data="lineChartData" />
        </el-row> 
      </transition>        
    </div>
</template>
<script>
import list from './list'
import LineChart from './LineChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
  }
export default {
    data(){
        return{
            lineChartData: lineChartData.newVisitis
        }
    },
    methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  },
    components:{
        list,
        LineChart
    }
}
</script>
<style  scoped>
.shouye{
    padding: 0 32px;
}
.charts>>>div:nth-child(1){
    margin: 0 auto !important;
}
        .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(20px);
        opacity: 0;
    }
</style>