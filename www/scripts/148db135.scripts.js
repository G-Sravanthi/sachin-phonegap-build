function sizeYoutube(){screenWidth=window.innerWidth,console.log(screenWidth);var a=66.66*screenWidth/100;return $("iframe").css({height:a+"px"}),a}function sizeUI(){fontSize="24px",screenWidth=window.innerWidth,tileCount=320>screenWidth?2:Math.round(screenWidth/160),tileSize=(screenWidth-4)/tileCount,chartWidth=screenWidth,200>screenWidth?fontSize="14px":270>screenWidth&&(fontSize="20px"),$("h2").css({"font-size":fontSize}),$(".col-md-3").css({width:tileSize+"px",height:tileSize+"px"})}function get_pie_chart_data(a,b){var c=$.extend(!0,{},b.simplePie);c.series[0].data=[];var d={name:"",y:"",color:""};d.name="Point-to-Point",d.y=a["point-to-point"].percent,d.color="#662d91",c.series[0].data.push(d);var e={name:"",y:"",color:""};return e.name="Connecting",e.y=a.connecting.percent,e.color="#82ca9c",c.series[0].data.push(e),c}function getScoreBuckets(a,b){for(var c=getWonLostScoreBuckets(a),d=Highcharts.getOptions().colors,e=["Won","Lost"],f=[{y:c.won,color:d[0],drilldown:{name:"Score Buckets",categories:c.scoreBuckets,data:c.wonScoreBuckets,color:d[0]}},{y:c.lost,color:d[1],drilldown:{name:"Score Buckets",categories:[].concat(c.scoreBuckets).reverse(),data:c.lostScoreBuckets.reverse(),color:d[1]}}],g=[],h=[],i=0;i<f.length;i++){g.push({name:e[i],y:f[i].y,color:f[i].color});for(var j=0;j<f[i].drilldown.data.length;j++){var k=.2-j/f[i].drilldown.data.length/5;h.push({name:f[i].drilldown.categories[j],y:f[i].drilldown.data[j],color:Highcharts.Color(f[i].color).brighten(k).get()})}}var l=$.extend(!0,{},b.simplePie);return l.series=[{data:g,size:"35%",dataLabels:{formatter:function(){return this.point.name},style:{fontSize:13},color:"white",distance:-25}},{data:h,size:"40%",innerSize:"35%",dataLabels:{style:{fontSize:13},formatter:function(){return this.y>=1?"<b>"+this.point.name+" runs:</b> "+this.y:null},distance:10}}],l.title.text="Sachin Score Buckets vs India Won/Lost Match Counts",l.plotOptions={pie:{shadow:!1,center:["50%","50%"],dataLabels:{style:""}}},l.chart.type="pie",l.plotOptions.pie.dataLabels.style={fontFamily:"OpenSansCondLight,Georgia,Times,serif"},l}function getWonLostScoreBuckets(a){for(var b=["0-20","21-49","50-70","71-90","91-99","100+"],c=[0,0,0,0,0,0],d=[0,0,0,0,0,0],e={won:0,lost:0,wonScoreBuckets:c,lostScoreBuckets:d,scoreBuckets:b},f=0;f<a.length;f++){var g=a[f].result?a[f].result:a[f].match_result;if(-1!="won lost".indexOf(g)){"won"==g?e.won++:e.lost++;var h=parseInt(a[f].sachin_score);switch(!0){case h<=b[0].split("-")[1]||isNaN(h):"won"==a[f].match_result?c[0]++:d[0]++;break;case h<=b[1].split("-")[1]:"won"==a[f].match_result?c[1]++:d[1]++;break;case h<=b[2].split("-")[1]:"won"==a[f].match_result?c[2]++:d[2]++;break;case h<=b[3].split("-")[1]:"won"==a[f].match_result?c[3]++:d[3]++;break;case h<=b[4].split("-")[1]:"won"==a[f].match_result?c[4]++:d[4]++;break;case h>b[4].split("-")[1]:"won"==a[f].match_result?c[5]++:d[5]++}}}return console.log(e),e}function getResultBuckets(a,b,c){for(var d=getWonLostByBuckets(a),e=Highcharts.getOptions().colors,f=["Won","Lost"],g=[{y:d.won,color:e[0],drilldown:{name:"Score Buckets",categories:d.byBuckets,data:d.wonByBuckets,color:e[0]}},{y:d.lost,color:e[1],drilldown:{name:"Score Buckets",categories:[].concat(d.byBuckets).reverse(),data:d.lostByBuckets.reverse(),color:e[1]}}],h=[],i=[],j=0;j<g.length;j++){h.push({name:f[j],y:g[j].y,color:g[j].color});for(var k=0;k<g[j].drilldown.data.length;k++){var l=.2-k/g[j].drilldown.data.length/5;i.push({name:g[j].drilldown.categories[k],y:g[j].drilldown.data[k],color:Highcharts.Color(g[j].color).brighten(l).get()})}}var m=$.extend(!0,{},b.simplePie);return m.series=[{data:h,size:"35%",dataLabels:{formatter:function(){return this.point.name},style:{fontSize:13},color:"white",distance:-25}},{data:i,size:"40%",innerSize:"35%",dataLabels:{style:{fontSize:13},formatter:function(){return this.y>=1?"<b>By "+this.point.name+":</b> "+this.y:null},distance:10}}],m.title.text="India Won/Lost By & Match Counts "+c,m.plotOptions={pie:{shadow:!1,center:["50%","50%"],dataLabels:{style:""}}},m.chart.type="pie",m.plotOptions.pie.dataLabels.style={fontFamily:"OpenSansCondLight,Georgia,Times,serif"},m}function getWonLostByBuckets(a){for(var b=["1 wkt","2 wkts","3 wkts","4 wkts","5 wkts","6 wkts","7 wkts","8 wkts","9 wkts","10 wkts","1-49 runs","50-99 runs","100-149 runs","150-199 runs","200+ runs"],c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e={won:0,lost:0,wonByBuckets:c,lostByBuckets:d,byBuckets:b},f=0;f<a.length;f++){var g=a[f].won_lost_by,h=a[f].result?a[f].result:a[f].match_result;if(-1!="won lost".indexOf(h))switch("won"==h&&e.won++,"lost"==h&&e.lost++,!0){case"won"==h:if(g.indexOf("wicket")>-1)c[parseInt(g)-1]++;else if(g.indexOf("run")>-1){var i=9+parseInt(parseInt(g)/50);i=i>14?14:i,c[i]++}break;case"lost"==h:if(g.indexOf("wicket")>-1)d[parseInt(g)-1]++;else if(g.indexOf("run")>-1){var i=9+parseInt(parseInt(g)/50);i=i>14?14:i,d[i]++}}}return console.log(e),e}function getAboveBelowWonLostPercentAt(a,b,c){for(var d=getWonLostPercent(a,b),e=Highcharts.getOptions().colors,f=[">= "+b,"< "+b],g=[{y:d.aboveScorePercent,color:e[0],drilldown:{name:"Won Lost Percent",categories:d.wonLost,data:d.wonLostAboveScore,color:e[0]}},{y:d.belowScorePercent,color:e[1],drilldown:{name:"Won Lost Percent",categories:[].concat(d.wonLost).reverse(),data:d.wonLostBelowScore.reverse(),color:e[1]}}],h=[],i=[],j=0;j<g.length;j++){h.push({name:f[j],y:g[j].y,color:g[j].color});for(var k=0;k<g[j].drilldown.data.length;k++){var l=.2-k/g[j].drilldown.data.length/5;i.push({name:g[j].drilldown.categories[k],y:g[j].drilldown.data[k],color:Highcharts.Color(g[j].color).brighten(l).get()})}}var m=$.extend(!0,{},c.simplePie);return m.series=[{data:h,size:"35%",dataLabels:{formatter:function(){return this.point.name},style:{fontSize:13},color:"white",distance:-30}},{data:i,size:"40%",innerSize:"35%",dataLabels:{style:{fontSize:13},formatter:function(){return this.y>=1?"<b>"+this.point.name+":</b> "+this.y+" matches":null},distance:2}}],m.title.text="Sachin Score and India Won Lost Match Counts",m.plotOptions={pie:{shadow:!1,center:["50%","50%"],dataLabels:{style:""}}},m.chart.type="pie",m.plotOptions.pie.dataLabels.style={fontFamily:"OpenSansCondLight,Georgia,Times,serif"},m}function getWonLostPercent(a,b){for(var c=["Won","Lost"],d=[0,0],e=[0,0],f={aboveScorePercent:0,belowScorePercent:0,wonLostAboveScore:d,wonLostBelowScore:e,wonLost:c},g=0;g<a.length;g++)-1!="won lost".indexOf(a[g].match_result)&&(a[g].sachin_score>=b?(f.aboveScorePercent++,"won"==a[g].match_result?d[0]++:"lost"==a[g].match_result&&d[1]++):(f.belowScorePercent++,"won"==a[g].match_result?e[0]++:"lost"==a[g].match_result&&e[1]++));return f}function getWonLostAt(a,b,c){var d=getWonLostPercent(a,b),e=$.extend(!0,{},c.simplePie);e.series[0].data=[];var f={name:"",y:"",color:""};f.name="Won",f.y=d.wonLostAboveScore[0],f.color="#ff0dff",e.series[0].data.push(f),e.plotOptions.pie.dataLabels={enabled:!0,style:{fontFamily:"OpenSansCondLight",fontSize:13},formatter:function(){return"<b>"+this.point.name+": </b> "+this.y+" matches"},distance:10};var g={name:"",y:"",color:""};return g.name="Lost",g.y=d.wonLostAboveScore[1],g.color="#f00",e.series[0].data.push(g),e.title.text="Won Lost Match Counts at Specific Score",e}function getWonLost(a,b){var c=getWonLostScoreBuckets(a),d=$.extend(!0,{},b.simplePie);d.series[0].data=[];var e={name:"",y:"",color:""};e.name="Won",e.y=c.won,e.color="#ff0dff",d.series[0].data.push(e);var f={name:"",y:"",color:""};return f.name="Lost",f.y=c.lost,f.color="#f00",d.series[0].data.push(f),d.title.text="Matches Won Lost",d}function getCenturyVsBattingOrder(a,b){for(var c={},d=0;d<a.length;d++)if(a[d].sachin_score>=100){var e=a[d].batting_order;c[e]?c[e]++:c[e]=1}var f=$.extend(!0,{},b.simplePie),g=["","blue","orange","green","purple"];f.series[0].data=[];for(var h in c){var i={};i.name=h,i.y=c[h],i.color=g[parseInt(h)],f.series[0].data.push(i)}return f.title.text="Centuries vs Inning",f.tooltip.formatter=function(){return"<b>"+this.key+" Inning: </b>"+this.y+" Centuries"},f}function custom_chart_settings_by_avg_fare(a){return a.chart.marginTop=140,a.xAxis={startOnTick:!0,endOnTick:!0,showLastLabel:!0,lineColor:"#aaa",tickLength:0,title:{text:"Average",align:"middle",style:{color:"#666",fontFamily:"Arial",fontSize:"12px"}},labels:{y:20,style:{color:"#666",fontFamily:"TitilliumWeb",fontSize:"12px"},verticalAlign:"middle"}},a.yAxis.max=500,delete a.yAxis.tickInterval,a.yAxis.title={text:"Number of Matches",align:"middle",style:{color:"#666",fontFamily:"Arial",fontSize:"12px"}},a.legend={align:"right",verticalAlign:"top",layout:"horizontal",floating:!0,x:0,y:0,itemMarginTop:5,itemMarginBottom:5},a.tooltip={enabled:!0,formatter:function(){return console.log(this),"<b>"+this.point.name+"</b><br><b>Matches: "+this.y+"</b><br><b>Average: "+this.x+"</b><br><b>Runs: "+this.point.runs+"</b>"}},a.plotOptions.scatter={states:{hover:{enabled:!1,lineColor:"rgb(100,100,100)"}}},a.plotOptions.series={marker:{symbol:"circle"}},delete a.yAxis.min,a.chart.type="scatter",a.series=[],a}function get_bubble_chart_data(a,b,c){var d=$.extend(!0,{},c.pos);d=custom_chart_settings_by_avg_fare(d);for(var e=0;e<a.length;e++){var f={name:"",color:"",data:[]},g={x:"",y:"",runs:"",name:"",marker:{radius:"",symbol:"circle"}};g.x=parseFloat(a[e].average),g.y=parseInt(a[e].matches),g.marker.radius=parseFloat(a[e].runs/500),g.runs=parseInt(a[e].runs),g.name=a[e].name,f.name=a[e].name,f.color=colorsArray[e],f.data.push(g),d.series.push(f)}return console.log(colorsArray),console.log(d),d}function get_area_chart_data(a,b){for(var c=$.extend(!0,{},b.areaChart),d=0;d<a.length;d++){var e=[],f=[],g=[],h=new Date(a[d].date);e.push(h.getTime()),e.push(parseInt(a[d].cum_runs)),g.push(h.getTime()),g.push(parseInt(a[d].top_score)),f.push(h.getTime()),f.push(parseFloat(a[d].avg)),c.series[0].data.push(f),c.series[1].data.push(e),c.series[2].data.push(g)}return c}function get_win_loss_area_chart(a,b){var c=$.extend(!0,{},b.areaChart);c.xAxis={categories:[]},c.xAxis.categories=[];for(var d=1989;2013>d;d++)c.xAxis.categories.push(d);c.series=[{name:"All",marker:{enabled:!1,symbol:"circle"},color:"#4572A7",type:"area",data:[]},{name:"Win",marker:{enabled:!1,symbol:"circle"},color:"#666666",type:"area",data:[]},{name:"Loss",marker:{enabled:!1,symbol:"circle"},color:"#efefef",type:"area",data:[]},{name:"Matches",marker:{enabled:!1,symbol:"circle"},color:"#89A54E",type:"spline",yAxis:1,data:[]}];for(var e=1989;2012!=e;){for(var f=0,g=0,h=0,i=0,j=0;j<a.length;j++){var k=new Date(a[j].date),l=k.getFullYear(k);if(l==e){var m="-"===a[j].sachin_score?0:a[j].sachin_score;"won"==a[j].match_result?f+=parseInt(m):"lost"==a[j].match_result&&(g+=parseInt(m)),h+=parseInt(m),i++}}c.series[0].data.push(h),c.series[1].data.push(f),c.series[2].data.push(g),c.series[3].data.push(i),e++}return console.log(c),c}angular.module("app.controllers",[]),angular.module("app.services",[]),angular.module("app.directives",[]),angular.module("feApp",["app.controllers","app.services","app.directives","ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap","uiSlider"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/summary",{templateUrl:"views/summary.html",controller:"SummaryCtrl"}).when("/SachinStats",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/ScoreBuckets",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/ResultBuckets",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/WonLostCenturiesInnning",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/RecordChart",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/LifeTimeChart",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/WinLossChart",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/FindOutYourSelf",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/FarewellSpeech",{templateUrl:"views/sachin_stats.html",controller:"SachinStatsCtrl"}).when("/SocialFeed",{templateUrl:"views/social_feed.html",controller:"SocialFeedCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("app.directives").directive("tile",function(){return function(a,b){angular.element(b).css({width:tileSize+"px",height:tileSize+"px"}),$("h2").css({"font-size":fontSize})}}),angular.module("app.directives").directive("chart",function(){return{restrict:"E",template:'<div class="hc-bars"></div>',scope:{chartData:"=chartId"},transclude:!0,replace:!0,link:function(a,b,c){var d,e={chart:{renderTo:b[0],type:c.type||null,height:c.height,width:c.width},colors:[c.color]};a.$watch(function(){return a.chartData},function(b){if(b){var c=!0,f={};if($.extend(c,f,e,a.chartData),d&&a.chartData.series.length==d.series.length&&a.chartData.series[0].data.length==d.series[0].data.length)for(var g=0;g<d.series.length;g++)for(var h=a.chartData.series[g].data,i=0;i<h.length;i++)d.series[g].data[i].update(h[i]);else d=new Highcharts.Chart(f)}},!0)}}}).directive("summarychart",function(){return{restrict:"E",template:'<div class="hc-bars"></div>'}}).directive("fbshare",function(){return function(a,b){b.bind("click",function(){var a=$(".hc-bars").filter(":visible").highcharts(),b=a.getSVG(),c=new Image;b="data:image/svg+xml,"+b,c.src=b,$(".chartImage").attr("src",b)})}}),angular.module("app.services").factory("Data",["$http","$rootScope",function(a){var b={get_local:function(b){var c=a.get(b).success(function(a){return window.recent_api_response=a,window.recent_api_url=b,a});return c},get_graph_series:function(a,b,c,d){var e=_.toArray(a);for(var f in e)e[f][b]=+e[f][c],e[f].y=+e[f][d].toFixed(1);return e}};return b}]),angular.module("app.services").factory("DefaultChartOptions",[function(){var a={chart:{style:{fontFamily:"OpenSansCondLight",fontSize:"16px",color:"#666"},plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1},title:{text:"",style:{fontFamily:"OpenSansCondLight",fontSize:16,color:"#777"}},xAxis:{lineColor:"#aaa",title:{align:"middle"},labels:{style:{color:"#666",fontFamily:"OpenSansCondLight",fontSize:"12px"},verticalAlign:"middle"}},yAxis:{lineColor:"#aaa",labels:{style:{color:"#666",fontFamily:"OpenSansCondLight",fontSize:"12px"}},title:{align:"middle",style:{color:"#666",fontFamily:"OpenSansCondLight",fontSize:"12px",fontWeight:100}},maxPadding:0,alternateGridColor:!1,gridLineWidth:0,minTickInterval:20},plotOptions:{},credits:{enabled:!1},legend:{itemMarginBottom:7,itemStyle:{color:"#666",fontFamily:"OpenSansCondLight",fontSize:"13px"}}};return a}]),angular.module("app.services").factory("ChartOptions",["DefaultChartOptions",function(a){booking_curve_chart={chart:{type:"line"},legend:{enabled:!0,layout:"vertical",align:"right",verticalAlign:"top",y:-20,borderWidth:0,itemStyle:{fontFamily:"OpenSansCondLight",fontSize:"16px",color:"#666"}},title:{text:""},subtitle:{text:""},tooltip:{enabled:!0,formatter:function(){return"<b>"+this.x+" days: "+Math.round(this.y)+"%</b>"}},plotOptions:{series:{marker:{radius:4,symbol:"circle"}}},xAxis:{gridLineWidth:0,tickLength:0,allowDecimals:!1,categories:[],title:{text:"Reading Days",align:"middle",style:{color:"#666",fontWeight:"normal"}},min:0,max:63,tickInterval:7,labels:{format:"{value}"},type:"number"},credits:{enabled:!1},yAxis:{title:{text:""},min:0,max:100,tickLength:0,gridLineWidth:0,plotLines:[{value:0,width:0,color:"#000"}]}},cluster={},cm_chart={},angular.copy(booking_curve_chart,cluster),angular.copy(booking_curve_chart,cm_chart),cm_chart.tooltip={enabled:!0,formatter:function(){return"<b>"+this.y+"</b>"}},cluster.xAxis.labels.format="{value}";var b={pos:$.extend(!0,booking_curve_chart,a),cluster_chart:$.extend(!0,cluster,a),channel_mix_chart:cm_chart};return b}]),angular.module("app.services").factory("LOSChart",["DefaultChartOptions",function(a){los_chart={chart:{type:"column"},xAxis:{gridLineWidth:0,tickLength:0,allowDecimals:!1,categories:[""],title:{text:"Days",align:"high",style:{color:"#666",fontWeight:"normal"}},labels:{format:"{value}"},type:"category"},yAxis:{title:{text:""},min:0,max:100},tooltip:{enabled:!0,formatter:function(){return"<b>"+this.y+"</b>"}},legend:{enabled:!1},title:{text:""}},cluster={};var b={pax:$.extend(!0,los_chart,a),cluster_chart:$.extend(!0,cluster,a)};return b}]),angular.module("app.services").factory("ControlTowerChart",["DefaultChartOptions",function(a){return ctc_options={chart:{type:"spline"},legend:{enabled:!0,layout:"vertical",align:"right",verticalAlign:"top",y:-20,borderWidth:0},title:{text:""},subtitle:{text:""},tooltip:{enabled:!0,formatter:function(){return"<b>"+this.series.name+" "+this.x+" weeks: "+Math.round(this.y)+"</b>"}},plotOptions:{series:{marker:{radius:4,symbol:"circle",enabled:!1}}},xAxis:{title:{text:"Weeks",align:"middle",style:{color:"#666",fontWeight:"normal"}},labels:{format:"{value}"},type:"number"},credits:{enabled:!1},yAxis:{title:{text:""}}},$.extend(!0,ctc_options,a)}]),angular.module("app.services").factory("PostedFlightsChartOptions",["DefaultChartOptions",function(a){posted_flight_bar_chart={chart:{type:"bar"},title:{text:""},subtitle:{text:""},xAxis:{categories:[],title:{text:null},tickLength:0,lineWidth:0},yAxis:{min:0,lineWidth:1,lineColor:"#666",title:{text:"# of Posted Flights"},labels:{overflow:"justify"}},tooltip:{enabled:!1},plotOptions:{bar:{dataLabels:{enabled:!0,useHTML:!0,formatter:function(){return'<span class="orange dataLabel">'+this.point.posted_percent.toFixed(1)+'</span>|<span class="brown dataLabel">'+this.point.total_percent.toFixed(1)+"</span>"}},pointWidth:22}},legend:{enabled:!1,layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:100,floating:!0,borderWidth:1,backgroundColor:"#FFFFFF",shadow:!0},tooltip:{formatter:function(){return"<b>"+Math.round(this.y)+"</b>"}},credits:{enabled:!1},series:[{color:"blue",data:[]}]};var b={pos:$.extend(!0,posted_flight_bar_chart,a)};return b}]),angular.module("app.services").factory("ChartOptionsFinancialKPI",["DefaultChartOptions",function(a){fin_kpi_chart={chart:{type:"line"},legend:{enabled:!1},title:{text:""},subtitle:{text:""},tooltip:{enabled:!0,formatter:function(){return"<b>"+Math.round(this.y)+"</b>"}},xAxis:{categories:[],gridLineWidth:0,lineColor:"#666666",labels:{rotation:-45,style:{fontSize:8.7}}},credits:{enabled:!1},plotOptions:{series:{marker:{radius:4,symbol:"circle"}}},yAxis:{title:{text:""},tickLength:0,gridLineWidth:0,lineColor:"#666666",labels:{style:{fontSize:8.7}},plotLines:[{value:0,width:0,color:"#000"}]},series:[]};var b={pos:$.extend(!0,fin_kpi_chart,a)};return b}]),angular.module("app.services").factory("PieChartOptions",[function(){var a={chart:{style:{fontFamily:"OpenSansCondLight"},plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,animation:{duration:1800}},title:{text:"",style:{fontFamily:"OpenSansCondLight",fontSize:16,color:"#777"},align:"center",verticalAlign:"bottom"},tooltip:{formatter:function(){return"<b>"+this.key+": </b>"+this.y}},credits:{enabled:!1},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1,color:"#000000",connectorColor:"#000000",format:"{point.percentage:.1f} %",style:{fontFamily:"OpenSansCondLight,Georgia,Times,serif"}}}},series:[{type:"pie",data:[],size:"50%"}]},b={simplePie:a};return b}]),angular.module("app.services").factory("StackChartOptions",[function(){traffic_comp_stack_chart={chart:{type:"column"},title:{text:""},xAxis:{lineColor:"white",categories:[],labels:{enabled:!1,y:20}},credits:{enabled:!1},yAxis:{min:0,gridLineWidth:0,title:{text:""},labels:{enabled:!1},stackLabels:{enabled:!0,style:{fontWeight:"bold",color:Highcharts.theme&&Highcharts.theme.textColor||"white"}}},legend:{enabled:!1},tooltip:{enabled:!1},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0,x:70,color:Highcharts.theme&&Highcharts.theme.dataLabelsColor||"black",formatter:function(){return""+this.y+" % "+this.series.name}}}},series:[]};var a={pos:traffic_comp_stack_chart};return a}]),angular.module("app.services").factory("StackColumnChartOptions",["DefaultChartOptions",function(a){shareIndex={chart:{type:"column"},title:{text:""},legend:{enabled:!0,layout:"vertical",align:"right",verticalAlign:"top",borderWidth:0},xAxis:{lineColor:"#aaa",categories:[],labels:{y:20}},yAxis:{min:0,gridLineWidth:0,title:{text:""},labels:{enabled:!0}},tooltip:{formatter:function(){return"<b>"+Math.round(this.y)+"</b>"}},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!1}}},series:[]};var b={pos:$.extend(!0,shareIndex,a)};return b}]),angular.module("app.services").factory("BubbleChartOptions",["DefaultChartOptions",function(a){fareStructure={chart:{type:"scatter",marginTop:120,marginRight:50},title:{text:""},subtitle:{text:""},xAxis:{categories:[],title:{enabled:!1},showLastLabel:!0},yAxis:{title:{text:""},gridLineWidth:1},legend:{enabled:!0,align:"right",verticalAlign:"top",borderWidth:0},plotOptions:{series:{marker:{radius:5,symbol:"circle"}},scatter:{dataLabels:{x:25,y:10,enabled:!0,useHTML:!0,formatter:function(){return'<span class="dataLabel">'+this.y+"</span>"}},pointWidth:22}},tooltip:{enabled:!0,formatter:function(){return"<b>AP: </b>"+this.point.ap+"  <b>Min Stay: </b>"+this.point.los}},series:[{name:"OW",color:"#a462c5",data:[],dataLabels:{color:"#a462c5"}},{name:"RT",color:"#d1cc1f",data:[],dataLabels:{color:"#d1cc1f"}}]};var b={fareStructure:$.extend(!0,fareStructure,a)};return b}]),angular.module("app.services").factory("AreaChartOptions",[function(){var a={chart:{zoomType:"xy"},title:{text:"Sachin Lifetime Score Chart"},subtitle:{text:"God Stats"},xAxis:[{type:"datetime"}],yAxis:[{labels:{style:{color:"#89A54E"}},title:{text:"Runs",style:{color:""}}},{title:{text:"",style:{color:"#4572A7"}},labels:{style:{color:"#4572A7"}},maxPadding:0,minPadding:0,opposite:!0}],tooltip:{shared:!0},legend:{layout:"horizontal",floating:!0,align:"right",verticalAlign:"top",backgroundColor:"#FFFFFF"},series:[{name:"Average",marker:{enabled:!1,symbol:"circle"},color:"#89A54E",type:"spline",yAxis:1,data:[],tooltip:{valueSuffix:""}},{name:"Runs",marker:{enabled:!1,symbol:"circle"},color:"#4572A7",type:"area",data:[],tooltip:{valueSuffix:""}},{name:"Top Score",marker:{enabled:!1,symbol:"circle"},color:"red",type:"spline",yAxis:1,data:[],tooltip:{valueSuffix:""}}]},b={areaChart:a};return b}]),angular.module("app.controllers").controller("MainCtrl",["$scope","$location","$timeout",function(a,b,c){a.colors=["#334D5C","#45b29d","#EFC94C","#E27A3F","#DF5A49","#25ADA7","#A1D87F","#FF453C","#EFC94C","#AF709A","#FFD530","#0E229B","#A4A1CC","#25ADA7","#A1D87F","#FF453C","#EFC94C","#AF709A","#FFD530","#0E229B","#A4A1CC","#25ADA7"],a.heightSize=sizeYoutube(),a.tiles=[{name:"Career <br/> Summary",url:"/summary","class":"col-md-3"},{name:"Score Buckets <br/> & <br/> Won/Lost Counts",url:"/ScoreBuckets","class":"col-md-3"},{name:"Won/Lost By <br/> & <br/> Match Counts",url:"/ResultBuckets","class":"col-md-3"},{name:"Life Time <br/> Chart",url:"/LifeTimeChart","class":"col-md-3"},{name:"Sachin <br/> vs <br/> Other Batsmen",url:"/RecordChart","class":"col-md-3"},{name:"Win/Lost <br/> Areachart",url:"/WinLossChart","class":"col-md-3"},{name:"Find Out <br/> Yourself",url:"/FindOutYourSelf","class":"col-md-3"},{name:"Farewell <br/> Speech",url:"/FarewellSpeech","class":"col-md-3"},{name:"Social <br/> Feed",url:"/SocialFeed","class":"col-md-3"}],a.$watch(function(){return b.path()},function(b){a.currentView=b,console.log(a.currentView)}),a.flipped=!1,a.flipEffect=function(d){a.flipped=!0,c(function(){b.path(d),a.flipped=!1},700)},a.charting_options={w_wo_options:["With Sachin","Without Sachin"],findout_options:["Simple","Advanced"]},a.chosen_option={without:a.charting_options.w_wo_options[0],findout:a.charting_options.findout_options[0]}}]).controller("SummaryCtrl",["$scope","Data","PieChartOptions",function(a,b,c){var d=function(a,b,c){var d=["#25ADA7","#A1D87F","#FF453C","#EFC94C","#AF709A","#FFD530","#0E229B","#A4A1CC","#25ADA7","#A1D87F","#FF453C","#EFC94C","#AF709A","#FFD530","#0E229B","#A4A1CC","#25ADA7"],e=[],f=$.map(a[b],function(a){return+a.Runs}).reduce(function(a,b){return a+b});console.log(f);var g=0;for(var h in a[b]){var i=a[b][h];e.push({name:i.name,percent_y:+(+i[c]/f*100).toFixed(1),y:+i[c],color:d[g++]})}return console.log(e),e},e=function(){var b=a.chosen_option.json_option,e=a.chosen_option.attr_option,f=a.r_api_data,g=d(f,b,e),h=angular.copy(c.simplePie);h.series=[{name:b,type:"pie",data:g}],h.plotOptions.pie.dataLabels={enabled:!0,style:{fontFamily:"OpenSansCondLight,Georgia,Times,serif",fontSize:13},formatter:function(){return"<b>"+this.point.name+": </b> "+this.y},distance:10},h.plotOptions.pie.center=["50%","50%"],h.chart.marginTop=h.chart.marginBottom=50,console.log(h),a.chosenStat=h};a.$watch("chosen_option",function(){a.r_api_data&&e()},!0),b.get_local("scripts/lib/sachin_odi_summary.json").success(function(b){a.r_api_data=b,a.charting_options=function(){var a=_.keys(b),c=function(){var c=_.keys(b[a[0]][0]);console.log(c);var d=c.indexOf("name");return c.splice(d,1),c};return{json_options:a,attr_options:c()}}(),a.chosen_option={json_option:a.charting_options.json_options[0],attr_option:a.charting_options.attr_options[1]},e()})}]),window.onload=window.onresize=window.onorientationchange=function(){sizeUI(),sizeYoutube()};var screenWidth,tileCount,tileSize,chartWidth,fontSize;angular.module("app.controllers").controller("SachinStatsLandingCtrl",["$scope","Data","PieChartOptions",function(a){a.page="Sachin Landing Stats",$(".sachinStat").animate({height:"550px"},1500)}]);var colors,colorsArray=["#25ADA7","#A1D87F","#FF453C","#EFC94C","#AF709A","#FFD530","#0E229B","#A4A1CC","#7C76B9","#03C7A1","#AEC9EC","#EEB674","#B99076","#348EBA","#4FCE87","#EA8B64"];angular.module("app.controllers").controller("SachinStatsCtrl",["$scope","Data","PieChartOptions","ChartOptions","AreaChartOptions",function(a,b,c,d,e){a.page="Sachin Stats",$(".sachinStat").animate({height:"auto"},1500),a.score=100,b.get_local("scripts/lib/trafficComp.json").success(function(b){a.matches=get_pie_chart_data(b.res["2013"],c),a.runs=get_pie_chart_data(b.res["2012"],c)}),b.get_local("scripts/lib/sachin_odi.json").success(function(b){a.api_data=b,a.scoreBuckets=getScoreBuckets(b,c),a.winLoss=getWonLost(b,c),a.centuryVsBattingOrder=getCenturyVsBattingOrder(b,c),a.winLoss=getWonLost(b,c),a.winLossChart=get_win_loss_area_chart(b,e),a.resultBucketsWithSachin=getResultBuckets(b,c,"with Sachin"),a.score=100,a.aboveBelowWonLostPercentAt=getAboveBelowWonLostPercentAt(a.api_data,a.score,c),a.wonLostAt=getWonLostAt(a.api_data,a.score,c),a.scoreWonLostPercent=function(b){return isNaN(b)||0>b?(alert("Enter valid score!"),void 0):(a.aboveBelowWonLostPercentAt=getAboveBelowWonLostPercentAt(a.api_data,b,c),a.wonLostAt=getWonLostAt(a.api_data,b,c),void 0)},a.$watch("score",function(b,c){return b==c?(console.log(b),void 0):(a.wonLostAt&&a.scoreWonLostPercent(+b),void 0)})}),b.get_local("scripts/lib/india_wo_sachin_odi.json").success(function(b){a.resultBucketsWithoutSachin=getResultBuckets(b,c,"without Sachin")}),b.get_local("scripts/lib/record_json.json").success(function(b){a.recordChart=get_bubble_chart_data(b,colors,d)}),b.get_local("scripts/lib/sachin_odi_cumulative.json").success(function(b){a.areaChart=get_area_chart_data(b,e)})}]),angular.module("app.controllers").controller("SocialFeedCtrl",["$scope",function(a){a.page="Social Feed",$(".sachinStat").animate({height:"550px"},1500)}]);