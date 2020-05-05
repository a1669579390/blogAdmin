<template>
    <div class="shouye">
        <list></list>
        <line-chart class="chart" :chart-data="lineChartData" />
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
    methods:{
    },
    components:{
        list,
        LineChart
    }
}
</script>
<style  scoped>
.chart{
    width: 100%;
    padding: 6% 0 0 3%;
}
</style>