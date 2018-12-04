// 图一折线

var Chart1 = echarts.init(document.getElementById('chart1'));
option1 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }

        },

    },
    yAxis: {
        type: 'value',
        splitLine:{//坐标在grid轴的分割线
            show:false,

        },
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

Chart1.setOption(option1);


// 图二条形
var Chart2 = echarts.init(document.getElementById('chart2'));
var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 1
    }
}

option2 = {
    color: ['#4fffff', '#2862ba','#6349d7'],//区域的背景色
    title: {
        text: 'Wheater Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left:12
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        name: 'Days',
        axisLabel: {
            formatter: '{value}',
        },
        axisTick:{//刻度的显示与隐藏
            show:false,
            lineStyle:{
                color:'#fff'
            },
            alignWithLabel: true
        },
        splitLine:{//坐标在grid轴的分割线
            show:false,
            lineStyle:{
                color:'#fff'
            }
        },
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['Sunny', 'Cloudy', 'Showers'],
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }
        },
        axisLabel: {
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 2,
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
                Sunny: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Sunny
                    }
                },
                Cloudy: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Cloudy
                    }
                },
                Showers: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: weatherIcons.Showers
                    }
                }
            }
        }
    },
    series: [
        {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint: {
                symbolSize: 1,
                symbolOffset: [0, '50%'],
                label: {
                    normal: {
                        formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                        backgroundColor: 'rgb(242,242,242)',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 10],
                        lineHeight: 26,
                        position: 'right',
                        distance: 20,
                        rich: {
                            a: {
                                align: 'center',
                                color: '#fff',
                                fontSize: 18,
                                textShadowBlur: 2,
                                textShadowColor: '#000',
                                textShadowOffsetX: 0,
                                textShadowOffsetY: 1,
                                textBorderColor: '#333',
                                textBorderWidth: 2
                            },
                            b: {
                                color: '#333'
                            },
                            c: {
                                color: '#ff8811',
                                textBorderColor: '#000',
                                textBorderWidth: 1,
                                fontSize: 22
                            }
                        }
                    }
                },
                data: [
                    {type: 'max', name: 'max days: '},
                    {type: 'min', name: 'min days: '}
                ]
            }
        },
        {
            name: 'City Beta',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110]
        },
        {
            name: 'City Gamma',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63]
        }
    ]
};
Chart2.setOption(option2);

// 图三秒表
var clart_1 = echarts.init(document.getElementById('clart_1'));
option3 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:360,    //设置刻度盘内数值区间
            splitNumber:5,  //设置间隔区域的显示数量
            radius: '100%',
            axisLabel: {            // 坐标轴小标记

                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#000',
                    fontSize: 1,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#000', //默认透明

                },
            },
            pointer: {
                width: 4,//指针的宽度
                length: "60%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            type: 'gauge',
            // detail: {formatter:'{value}%'},
            data: [{value: 50}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#2c0a1e'], [0.8, '#1c3558'], [1, '#030734']]
                }
            },
        }
    ]
};

setInterval(function () {
    option3.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    clart_1.setOption(option3, true);
},2000);
clart_1.setOption(option3);


var clart_2 = echarts.init(document.getElementById('clart_2'));
option32 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:360,    //设置刻度盘内数值区间
            splitNumber:5,  //设置间隔区域的显示数量
            radius: '100%',
            axisLabel: {            // 坐标轴小标记

                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#000',
                    fontSize: 1,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#000', //默认透明

                },
            },
            pointer: {
                width: 4,//指针的宽度
                length: "60%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            type: 'gauge',
            // detail: {formatter:'{value}%'},
            data: [{value: 50}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                }
            },
        }
    ]
};

setInterval(function () {
    option32.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    clart_1.setOption(option32, true);
},2000);
clart_2.setOption(option32);


var clart_3 = echarts.init(document.getElementById('clart_3'));
option33 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:360,    //设置刻度盘内数值区间
            splitNumber:5,  //设置间隔区域的显示数量
            radius: '100%',
            axisLabel: {            // 坐标轴小标记

                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#000',
                    fontSize: 1,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#000', //默认透明

                },
            },
            pointer: {
                width: 4,//指针的宽度
                length: "60%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            type: 'gauge',
            // detail: {formatter:'{value}%'},
            data: [{value: 50}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                }
            },
        }
    ]
};

setInterval(function () {
    option33.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    clart_3.setOption(option33, true);
},2000);
clart_3.setOption(option33);


var clart_4 = echarts.init(document.getElementById('clart_4'));
option34 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:360,    //设置刻度盘内数值区间
            splitNumber:5,  //设置间隔区域的显示数量
            radius: '100%',
            axisLabel: {            // 坐标轴小标记

                textStyle: {       // 属性lineStyle控制线条样式
                    color: '#000',
                    fontSize: 1,   //改变仪表盘内刻度数字的大小
                    shadowColor: '#000', //默认透明

                },
            },
            pointer: {
                width: 4,//指针的宽度
                length: "60%", //指针长度，按照半圆半径的百分比
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5
            },
            type: 'gauge',
            // detail: {formatter:'{value}%'},
            data: [{value: 50}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                }
            },
        }
    ]
};

setInterval(function () {
    option34.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    clart_4.setOption(option34, true);
},2000);
clart_4.setOption(option34);








// 图4
//生成数据

var Chart4= echarts.init(document.getElementById('chart4'));

option4 = {
    xAxis: {
        interval:14,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{ // x轴的字体样式
            interval:1,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }

        },
        min: function(value) {
            return value.min;
        },
        itemStyle:{
            minInterval: 1,
            boundaryGap:12,
            barWidth:1,

        },

    },
    yAxis: {
        type: 'value',
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }
        },
        splitLine:{//坐标在grid轴的分割线
            show:false,
        },
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth :12,
        xAxisIndex:0,
        barGap:'8%',/*多个并排柱子设置柱子之间的间距*/
        barCategoryGap:false,/*多个并排柱子设置柱子之间的间距*/
        itemStyle: {
            normal: {
                color: function (params) {
                    //解决问题1：柱子的颜色要各种颜色，而不是同一种颜色；
                    var colorList = [
                        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                }
            },
            boundaryGap:false
        },
    }]}
Chart4.setOption(option4);

//图5
var Chart5 = echarts.init(document.getElementById('chart5'));

option5 = {
    color: ['#804443'],//区域的背景色
    xAxis: {

        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }

        },
    },
    yAxis: {
        type: 'value',
        splitLine:{//坐标在grid轴的分割线
            show:false,
        },
        axisLabel:{ // x轴的字体样式
            interval:0,
            textStyle:{
                color:'#fff',
                fontSize:'8'
            }

        },
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};
Chart5.setOption(option5);

//图六

// 基于准备好的容器(这里的容器是id为chart1的div)，初始化echarts实例
var chart6 = echarts.init(document.getElementById("chart6"));

// 圆环图各环节的颜色
var color = ['#6794e5', '#ff7a46', '#84d0fa', '#d372d5','#41bf41'];

// 圆环图各环节的名称和值(系列中各数据项的名称和值)
var data =[{
    name: '其它',
    value: 320
},{
    name: '休闲裤',
    value: 586
},{
    name: '女士衬衫',
    value: 84
},{
    name: '运动服',
    value: 725
},{
    name: '正装',
    value: 72
}];

// 指定图表的配置项和数据
var option6 = {
    backgroundColor: '#040a35',
    //背景色
    // backgroundColor: {			// 背景颜色
    //     type: 'linear',
    //     x: 0,
    //     y: 0,
    //     x2: 0,
    //     y2: 1,
    //     colorStops: [{
    //         offset: 0, color: 'rgba(0,0,0,0.4)' // 0% 处的颜色
    //     }, {
    //         offset: 0.5, color: 'rgba(0,0,0,0.4)' 	// 50% 处的颜色
    //     }, {
    //         offset: 1, color: 'rgba(0,0,0,0.4)' // 100% 处的颜色
    //     }],
    //     globalCoord: false // 缺省为 false
    // },

    // 标题
    // title: [{
    //     text: '商城各服装销量对比',
    //     top:'5%',
    //     left:'3%',
    //     textStyle:{
    //         color: '#000',
    //         fontSize:18,
    //     }
    // }],

    // 图例
    // legend: [{
    //     selectedMode:true,             // 图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
    //     top: '10%',
    //     left: 'center',
    //     textStyle: {                      // 图例的公用文本样式。
    //         fontSize: 14,
    //         color: '#fff'
    //     },
    //     data: ['其它','休闲裤','女士衬衫','运动服',"正装"]
    // }],

    // 提示框
    // tooltip: {
    //     show: true,                 // 是否显示提示框
    //     formatter: '{b} </br> 销量{c}件 </br> 占比{d}%'      // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    // },

    // graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
    graphic: {
        type: 'text',               // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
        top: 'center',              // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
        left: 'center',             // 同上
        style: {
            text: '各服装销量对比',       // 文本块文字。可以使用 \n 来换行。[ default: '' ]
            fill: '#fff',           // 填充色。
            fontSize: 16,           // 字体大小
            fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
        }
    },

    // 系列列表
    series: [{
        name: '圆环图系列名称',         // 系列名称
        type: 'pie',                    // 系列类型
        center:['50%','50%'],           // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
        radius: ['30%', '45%'],         // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
        hoverAnimation: true,           // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
        color: color,                   // 圆环图的颜色
        label: {                        // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
            normal: {
                show: true,             // 是否显示标签[ default: false ]
                position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                formatter: '{b} : {c}件'  // 标签内容
            }
        },
        labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
            normal: {
                show: true,             // 是否显示视觉引导线。
                length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                length2: 10,            // 视觉引导项第二段的长度。
                lineStyle: {            // 视觉引导线的样式
                    //color: '#000',
                    //width: 1
                }
            }
        },
        data: data                      // 系列中的数据内容数组。
    }]
};

// 使用刚指定的配置项和数据显示图表
    chart6.setOption(option6)




//中国地图

// 初始化echarts示例mapChart
function mapChild(chinaJson) {

    echarts.registerMap('china', chinaJson); // 注册地图

    var mapChart = echarts.init(document.getElementById('mapBox'));
    var myData = [
        // 地理坐标，经度
        // 地理坐标，纬度

        {name: '北京', value: [ 116.46,  39.92, 340]},
        {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
        {name: '招远', value: [120.38, 37.35, 142]},
        {name: '舟山', value: [122.207216, 29.985295, 123]},

    ]
    var option = {
        geo: {
            map: 'china',
            itemStyle: {					// 定义样式
                normal: {					// 普通状态下的样式
                    areaColor: '#030a36',
                    borderColor: '#1c2551'
                },
                emphasis: {					// 高亮状态下的样式//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    areaColor: '#2a333d'
                },
                series: [
                    {
                        name: '数据分布点', // series名称
                        type: 'lines', // series图表类型
                        coordinateSystem: 'geo', // series坐标系类型
                        data: myData // series数据内容
                    }
                ]
            },

        },

    }

    mapChart.setOption(option);

};
mapChild(map);


// 自适应
window.onresize = Chart1.resize;



var myChart = echarts.init(document.getElementById('map'));

var name_title = "中国人民大学2017年各省市计划录取人数"
var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [
    {name:"北京",value:177},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:66},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:9},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",value:67},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",value:14},
];

var geoCoordMap = {};
var toolTipData = [
    {name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},
    {name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
    {name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
    {name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
    {name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
    {name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
    {name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
    {name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
    {name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
    {name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
    {name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
    {name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
    {name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
    {name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
    {name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
    {name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
    {name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
    {name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
    {name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
    {name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
    {name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
    {name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
    {name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
    {name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
    {name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
    {name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
    {name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
    {name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
    {name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
    {name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
    {name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 480,
    min = 9; // todo
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {

            color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [{
        name: '散点',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#05C3F9'
            }
        }
    },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};
myChart.setOption(option);