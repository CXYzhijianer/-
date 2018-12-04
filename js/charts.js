//..............................index.html..........................................
$(function () {
    // 基于准备好的dom，初始化echarts实例

    var myChart = echarts.init(document.getElementById('area_chart'));

    // 指定图表的配置项和数据
    option = {
        color: ['#c4e321', '#6bcccc', '#f99e9a'],//区域的背景色
        backgroundColor:"#fff",//表格背景色
        title : {
            text: 'sfedgrfdgetr'//标题

        },

        tooltip : {//提示信息
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
            },
            trigger: 'axis',
            textStyle: {

                fontSize: 12,
                color: ['#c4e321', '#6bcccc', '#f99e9a'],
                textShadowColor:"#fff",
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            padding:10,
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        calculable : true,
        xAxis : [

            {
                type : 'category',
                boundaryGap : false,
                data : ['2014-04','2014-06', '2014-08', '2014-10', '2014-12', '2015-03', '2015-05', '2015-07','2015-09', '2015-11', '2016-01','2016-03', '2016-05'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle:{//设置坐标轴的线的样式
                        color:'#efefef',
                        width:'1',
                        normal: {
                            opacity: 1
                        }
                    },
                },
                axisLabel:{ // x轴的字体样式
                    interval:0,
                    textStyle:{
                        color:'#6c6c6c',
                        fontSize:'12'
                    }
                },
            },
        ],
        yAxis : [
            {
                type : 'value',
                min:0,
                max:20000,
                interval:5000,
                axisTick: {
                    show: false
                },
                boundaryGap:false,
                splitNumber:4,
                axisTick:{//坐标轴的刻度
                    show:false,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                splitLine:{//坐标轴在表格中的分割线
                    show:false,
                    linStyle:{
                        color:'#ffffff'
                    }
                },
                axisLine: {
                    lineStyle:{//设置坐标轴的线的样式
                        color:'#efefef',
                        width:'1',
                        normal: {
                            opacity: 1
                        }
                    },
                },
                axisLabel:{ // x轴的字体样式
                    interval:0,
                    textStyle:{
                        color:'#6c6c6c',
                        fontSize:'12'
                    }
                },
            },

        ],
        series : [
            {
                textStyle: {
                    fontSize: 16,
                    color: 'red'
                },
                name:'All Visitors',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [950.6, 5004.4, 2009.9, 7001.5, 1006.4, 1209.2, 1404.0, 1706.0, 12999.2, 6144.0, 5176.0, 135.6, 3148.5]
            },
            {
                textStyle: {
                    fontSize: 20,
                    color: '#c4e321'
                },
                name:'Returning Visitors',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [ 2668, 7685, 1064, 1292, 144, 1760, 1156, 8008.5, 1425.2, 14454.50, 14476.0, 14635.6, 1448.5]
            },

            {
                textStyle: {

                    fontSize: 20,
                    color: '#6bcccc'
                },
                name:'Unique Visitors',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [5232.6, 5565.4, 629.9, 787.5, 9176.4, 1999.2, 1784.0, 5678.0, 1289.2, 1484.0, 116.0, 11.6, 168.5]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();

    });
})



// window.onresize = myChart.resize;//方法二



