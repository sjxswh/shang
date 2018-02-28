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
            type: 'column'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Brone', 'Silver', 'Gold', 'Platinum', 'Diamond','Master','Challenger']
        },
        yAxis: {
        		type: "percent",
	          min:0,
						labels: {
							format:'{value}%',
							style: {
								color: "#525252",
								fontWeight: "bold"
							},
						},
            title: {
                text: '占有率'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
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
