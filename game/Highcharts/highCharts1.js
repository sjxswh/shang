function hightchartData(id){
	var chart = Highcharts.chart(id, {
	  chart:{
	  	  backgroundColor: '#f9f9fa',
	  	  type:"line"
	  },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
					shared: true,
					backgroundColor: "#1C242D",
					borderColor: "#1C242D",
					borderWidth: 1,
					borderRadius: 0,
					style: {
						color: "#FFFFFF"
					},
					formatter: function(){
						console.log(this)
					return `<span style="color:white">${this.x}版本 <b style="color:#ccc">(10.12)</b></span></br>
					<span style="color:red;margin:10px 0;">不祥之刃: ${this.y}% (2nd)</span></br>
					<span style="color:#ccc">中单 英雄平均:50%</span></br>`
				},
				useHTML: true,
				shared: true
		},
    xAxis: {
			categories:[7.24,8.1,8.2,8.3,8.4],
 			lineWidth: 0,
			tickWidth: 0,
		},
		yAxis: {
			type: "percent",
			gridLineWidth: 0,
			lineWidth: 0,
			tickWidth: 0,
			min:40,
			labels: {
				format:'{value}%',
				style: {
					color: "#525252",
					fontWeight: "bold"
				},
			},
			title: {
				style: {
					color: "#FFFFFF"
				},
				text: null
			},
		},
		plotOptions: {
			column: {
				dataLabels: {
					enabled: true,
					crop: false,
					overflow: 'none'
				},
			},
		},
    legend: {
        enabled: false,
    },
   
    series: [{
        name: '安装，实施人员',
        data: [50.34, 51.75, 49.46, 50.12, 51.23],
        states: {
					hover: {
						marker: {
							symbol: "circle",
							lineWidth: '1px',
							lineColor: "#989898",
							fillColor: '#fff'
						},
					}
				},
        dataLabels: {
					enabled: true,
					crop: false,
					/*format: '{point.rank}', // this.points[0].point.rank*/
					style: {
						color: '#777',
						textShadow: false,
						fontWeight: 'normal',
						fontSize: '12px'
					}
				},
        marker: {
					symbol: "circle",
					lineWidth: '2px',
					lineColor: "#989898",
					fillColor: '#fff'
				},
				zoneAxis: 'x',
				zones: [{
					fillColor: '#e7e7e7',
					color: '#e7e7e7'
				}] 
    },{
        type:"line",
        data: [46,46,46,46,46],
        color: "#979797",
				lineWidth: 1,
				marker: {enabled: false},
				dashStyle: 'dash',
				states: {
					hover: {
						enabled: false
					}
				},
				dataLabels: {
            enabled: false          // 开启数据标签
        },
    }
       ],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

}
function highchartColumn(id){
	var chart = Highcharts.chart(id, {
       chart: {
					/*renderTo: targetElement,*/
					type: 'column',
					margin: [20, 20, 60, 60],
					animation: false,
					backgroundColor: "#ededed"
				},
				/*credits: {text: _L('CHART_NOTICE_ABOVE_BRONZE')},*/
				colors: ['rgba(0,160,210,.8)', 'rgba(0,207,188,.8)', 'rgba(145,213,76,.8)', 'rgba(255,198,89,.8)', 'rgba(255,108,129,.8)',],
        title: {
            text: null
        },
        xAxis: {
           lineColor: '#dcdcdc',
					lineWidth: 1,
					gridLineColor: "#f0f0f0",
					gridLineWidth: 1,
					gridLineDashStyle: 'solid',
					categories: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Challenger'],
        },
        yAxis: {
        		type: "percent",
	          min: 0,
						title: "占有率",
						lineWidth: 1, lineColor: '#dcdcdc',
						gridLineWidth: 1, gridLineColor: "#f0f0f0",
						stackLabels: {
							enabled: true,
							style: {
								fontWeight: 'bold',
								color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
							},
							formatter: function(){
								return this.total + '%';
							}
						},
						labels: {
							formatter: function(){
								return this.value + '%';
							}
						}
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            y: 10,
            floating: true,
            backgroundColor: "#ededed",
            shadow: false
        },
        tooltip: {
            formatter: function(){
							var s = '<b>' + this.x + ': ' + this.points[0].point.stackTotal + '%</b>';
	
							$.each(this.points, function(i, point){
								s += '<br>' + point.series.name + ': ' + point.y + '%';
							});
	
							return s;
						},
						shared: true
        },
        plotOptions: {
            column: {
							stacking: 'normal',
							pointPadding: 0.01,
							borderWidth:0,
							dataLabels: {
								enabled: true,
								color:'white',
								formatter: function(){
									if (this.y >= 2)
										return this.y + '%';
									else
										return '';
								},
								style: {
									textShadow: false
								}
							},
						}	
        },
        series: [{
            name: 'V',
            data: [3.94, 10.21, 7.55, 2.43, 0.9,null,null]
        }, {
            name: 'IV',
            data: [3.45, 10.26, 4.41, 1.49, 0.29,null,null]
        }, {
            name: 'III',
            data: [4.51, 10.94, 3.54, 1.48, 0.15,null,null]
        }, {
            name: 'II',
            data: [5.3, 10.87, 2.3, 1.4, 0.08,null,null]
        }, {
            name: 'I',
            data: [5.21, 6.69, 1.75, 0.74, 0.05, 0.05,0.01]
        }]
    });
}


function highchartsPie(id){
	var colors = Highcharts.getOptions().colors,
        categories = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Challenger'],
        data = [{
            y: 22.33,
            color: "#a5967a",
            drilldown: {
                name: 'Bronze',
                categories: ['Bronze5', 'Bronze4', 'Bronze3', 'Bronze2', 'Bronze1'],
                data: [3.94, 3.45, 4.51, 5.3,5.21],
                color: colors[0]
            }
        }, {
            y: 48.96,
            color:"#b7b9bd",
            drilldown: {
                name: 'Silver',
                categories: ['Silver5', 'Silver4', 'Silver3', 'Silver2', 'Silver1'],
                data: [10.21, 10.26, 10.94, 10.87, 6.69],
                color: colors[1]
            }
        }, {
            y: 19.6,
            color: "#f0b959",
            drilldown: {
                name: 'Gold',
                categories: ['Gold5', 'Gold4', 'Gold3', 'Gold2', 'Gold1'],
                data: [7.55, 4.41, 3.54, 2.3, 1.75],
                color: colors[3]
            }
        }, {
            y: 7.55,
            color: "#83c9c2",
            drilldown: {
                name: 'Platinum',
                categories: ['Platinum5', 'Platinum4', 'Platinum3', 'Platinum2', 'Platinum1'],
                data: [2.43, 1.49, 1.48, 1.4, 0.74],
                color: colors[4]
            }
        }, {
            y: 1.49,
            color: "#1e98c2",
            drilldown: {
                name: 'Diamond',
                categories: ['Diamond5', 'Diamond4', 'Diamond3', 'Diamond2', 'Diamond1'],
                data: [0.9, 0.29, 0.15, 0.08, 0.05],
                color: colors[4]
            }
        }, {
            y: 0.05,
            color: colors[5],
            drilldown: {
                name: 'Master',
                categories: ['Master5', 'Master4', 'Master3', 'Master2', 'Master1'],
                data: [null, null, null, null, 0.05],
                color: colors[5]
            }
        }, {
            y: 0.01,
            color: colors[6],
            drilldown: {
                name: 'Diamond',
                categories: ['Diamond5', 'Diamond4', 'Diamond3', 'Diamond2', 'Diamond1'],
                data: [null, null, null, null, 0.01],
                color: colors[6]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
    // 构建数据数组
    for (i = 0; i < dataLen; i += 1) {
        // 添加浏览器数据
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
        // 添加版本数据
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }
    // 创建图表
    var chart = Highcharts.chart(id, {
        chart: {
            type: 'pie',
            backgroundColor: "#ededed"
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        yAxis: {
            title: {
                text: null
            }
        },
        plotOptions: {
            pie: {
               borderWidth: 0,
								dataLabels: {style: {'font-size': '12px'}},
								animation: false
            }
        },
        tooltip: {
        	formatter: function(){
						if (this.series.name =="TIER") {
							return '<b>' + this.key + '</b><br/>' + this.series.name + ": " + this.y + '%';
						}
						else {
							return '<b>' + this.key + '</b><br/>' + this.series.name + ": " + this.y + '%';
						}
					},
            valueSuffix: '%'
        },
        series: [{
            name: 'TIER',
            data: browserData,
						size: '80%',
						dataLabels: {
							formatter: function(){
								return this.y >= 0 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
							}
						}
        }, {
            name: '在这个排位的百分比',
            data: versionsData,
            size: '80%',
						innerSize: '70%',
						dataLabels: {
							formatter: function(){
								return null;
							}
						}
        }]
    });
	  
      
}
function highchartsColm(id){
	 var chart = Highcharts.chart(id, {
        chart: {
            type: 'column',
            backgroundColor: "#ededed"
        },
        colors: ['rgba(0,160,210,.8)', 'rgba(0,207,188,.8)', 'rgba(255,198,89,.8)', 'rgba(255,108,129,.8)'],
        title: {
            text: null
        },
        xAxis: {
        	lineWidth: 1, lineColor: '#585551',
					gridLineWidth: 1, gridLineColor: "#dcdcdc",
            categories :[
            {
            	name:'Bronze',
            	image:'img/bronze1.png'
            },
            {
            	name:'Silver',
            	image:'img/silver1.png'
            }, {
            	name:'Gold',
            	image:'img/bronze1.png'
            }, {
            	name:'Platinum',
            	image:'img/silver1.png'
            }, {
            	name:'Diamond',
            	image:'img/bronze1.png'
            }, {
            	name:'Master',
            	image:'img/silver1.png'
            }, {
            	name:'Challenger',
            	image:'img/bronze1.png'
            }],
            crosshair: true,
            labels: {
						formatter: function(){
							return "<div style='text-align: center;'><img src='" + this.value.image + "' style='width:40px;height:40px;margin:-5px 0 -5px 0;'><br>" + this.value.name + "</div>";
						},
						useHTML: true
					}
        },
        yAxis: {
        	lineWidth: 1, lineColor: '#585551',
					gridLineWidth: 1, gridLineColor: "#dcdcdc",
            min: 0,
            
            title: {
                text: '每局击杀/死亡/助攻'
            }
        },
        tooltip: {
            followPointer: true,
							followTouchMove: true,
							formatter: function(){
								//console.log(this)
								var s = '<b>' + this.x.name + '</b>';
								$.each(this.points, function(i, point){
									s += '<br><span style="color:' + point.series.color + '">' + point.series.name + '</span>: ' + point.y + '';
								});
		
								return s;
							},
							shared: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series: [{
            name: 'KDA',
            data: [1.72, 2.03, 2.2, 2.35, 2.52, 2.77, 2.17]
        }, {
            name: 'Kill',
            data: [4.83, 5.33, 5.51, 5.4, 5.56, 5.5, 5.37]
        }, {
            name: 'Death',
            data: [5.87, 5.41, 5.06, 4.64, 4.26, 3.54, 4.93]
        }, {
            name: 'Assist',
            data: [5.29, 5.63, 5.62, 5.53, 5.15, 4.32, 5.33]
        }]
    });
}


function hightchartNetwork(id){
	
    var chart = Highcharts.chart(id, {
        chart: {
            polar: true,
            type: 'line',
            backgroundColor:"#f2f2f2"
        },
        title: {
            text: null
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            tickInterval: 60,
            lineWidth: 0,
            min: 0,
            max: 360,
            labels: {
                formatter: function () {
                    return null;
                }
            }
        },
        yAxis: {
        	gridLineInterpolation: 'polygon',
        	lineWidth: 0,
            min: 0,
            labels: {
                formatter: function () {
                    return null;
                }
            },
            zoneAxis: 'y',
						zones: [{
							fillColor: '#e7e7e7',
							color: '#e7e7e7'
						}] 
        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 60
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: [{
        		type: 'polygon',
            name: '柱形',
            data: [650, 560, 460, 700, 520, 650],
            color: 'rgba(75, 119, 254, 0.3)',  
            pointPlacement: 'on' ,
            marker: {
            	enabled: true,
							symbol: "circle",
							radius:2,
							lineWidth: '1px',
							lineColor: '#2857a6',
							fillColor: '#fff'
						},
						states: {
							hover: {
								enabled: false
							}
						},
        }]
    });
}
function highchartsPies(id){
	var highwidth = $('.highcharts-container').width()
	var chart = Highcharts.chart(id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [0, 0 , 0, 0],
            backgroundColor:"#f2f2f2",
        },
       colors: ['red', 'rgb(0,160,210)' ],
        title: {
            floating:true,
            text: '65%'
        },
       tooltip: {
            enabled: false
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                },
                point: {
                    events: {
                        mouseOver: function(e) {  
                            return null
                        }
                    }
                },
            }
        },
        series: [{
            type: 'pie',
            size:'100%',
            innerSize: '70%',
            name: '市场份额',
            data: [
                ['Opera', 3.2],
                ['其他', 6.7]
            ],
            marker: {
            	enabled: false,
						},
						states: {
							hover: {
								enabled: false
							}
						},
        }]
    }, function(c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y:centerY + titleHeight/2
        });
        chart = c;
    });
}
