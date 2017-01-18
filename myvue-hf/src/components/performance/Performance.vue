<template lang="html">
  <!-- <message-custom title="我的工作表现">
    <i slot="title" class="uk-icon-backward" style="margin-right: 5px;"></i> -->
    <div id="myChart" style="width: 711px; height: 400px; border: 1px solid rgba(27, 30, 51, 0.64); position: relative; z-index: 1">   
    </div>
  <!-- </message-custom> -->
</template>
<script>
  import MessageCustom from '../message-custom'
  import echarts from 'echarts'

  export default {
    data () {
      return {
        name: 'yxw'
      }
    },
    mounted () {
      this._initMychartdata()
    },
    methods: {
      _initMychartdata: () => {
        let option = {
          title: {
            text: 'work performance'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['意向', '现状', '期望']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                show: true,
                interval: 'auto',    // {number}
                rotate: -45,
                margin: 18,
                formatter: '{value}',    // Template formatter!
                textStyle: {
                  color: '#1e90ff',
                  fontFamily: 'verdana',
                  fontSize: 10,
                  fontStyle: 'normal',
                  fontWeight: 'bold'
                }
              }
            }
          ],
          series: [
            {
              name: '期望',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default',
                    color: 'rgba(51, 153, 255, 0.6)'
                  },
                  lineStyle: {
                    type: 'solid',
                    color: 'rgba(51, 153, 255, 0.6)'
                  }
                }
              },
              data: [10, 12, 21, 54, 260, 830, 710]
            },
            {
              name: '现状',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default',
                    color: 'rgba(139, 195, 74, 1)'
                  },
                  lineStyle: {
                    type: 'solid',
                    color: 'rgba(139, 195, 74, 1)'
                  }
                }
              },
              data: [30, 182, 434, 791, 390, 30, 10]
            },
            {
              name: '意向',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default',
                    color: 'rgba(103, 58, 183, 0.6)'
                  },
                  lineStyle: {
                    type: 'solid',
                    color: 'rgba(103, 58, 183, 0.6)'
                  }
                }
              },
              data: [1320, 1132, 601, 234, 120, 90, 20]
            }
          ]
        }
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption(option)
      }
    },
    components: {
      MessageCustom
    }
  }
</script>