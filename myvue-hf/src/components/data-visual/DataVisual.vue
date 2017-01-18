<template lang="html">
  <!-- <message-custom title="Skills-Stack">
    <i slot="title" class="uk-icon-industry" style="margin-right: 5px;"></i> -->
    <div id="skillStack" class="uk-text-center" style="height: 400px; border: 1px solid rgba(27, 30, 51, 0.64)">   
    </div>
  <!-- </message-custom> -->
</template>

<script>
  import MessageCustom from '../message-custom/MessageCustom'
  import echarts from 'echarts'
  import 'echarts-wordcloud'
  
  export default {
    mounted () {
      this._initSkillStackData()
    },
    methods: {
      _initSkillStackData: () => {
        let option = {
          title: {
            text: 'Skills',
            subtext: 'Involed Skills'
          },
          tooltip: {},
          series: [{
            type: 'wordCloud',
            gridSize: 15,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: 'circle',
            width: '100%',
            height: '100%',
            textStyle: {
              normal: {
                color: function () {
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')'
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: [{
              name: 'SPA USE VUE 2.0',
              value: 4000,
              textStyle: {
                normal: {
                  color: 'black'
                },
                emphasis: {
                  color: 'red'
                }
              }
            }, {
              name: 'echarts',
              value: 3181
            }, {
              name: 'Node.js',
              value: 1386
            }, {
              name: 'Uikit',
              value: 2055
            }, {
              name: 'Express',
              value: 2244
            }, {
              name: 'Webpack',
              value: 1898
            }, {
              name: 'Node Npm',
              value: 1484
            }, {
              name: 'vue-resource',
              value: 847
            }, {
              name: 'Jquery',
              value: 582
            }, {
              name: 'vue-loader',
              value: 555
            }, {
              name: 'vue-router',
              value: 550
            }, {
              name: 'babel',
              value: 462
            }, {
              name: 'ESlint',
              value: 366
            }, {
              name: 'ES2015',
              value: 360
            }]
          }]
        }
        let myChart = echarts.init(document.getElementById('skillStack'))
        myChart.setOption(option)
      }
    },
    components: {
      MessageCustom
    }
  }
</script>