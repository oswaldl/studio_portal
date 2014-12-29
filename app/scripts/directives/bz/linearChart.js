
define(['../module', 'd3'], function (directives, d3) {
    'use strict';
    directives.directive('linearChart', ['$parse', 'almSvgService', function ($parse, almSvgService) {
        return {
          restrict: 'EA',
          scope: {},
          link: function(scope, elem, attrs) {


               d3.xml("http://localhost:8000/app/images/scrum.svg", "image/svg+xml", function(xml) {
                    elem[0].appendChild(xml.documentElement);
                    var svg = d3.select("svg");

                    //sample box移动
                    setInterval(function(){
                        almSvgService.addSampleBox(d3);
                    }, 7000);

                    //灯隐藏显示效果
                    setInterval(function(){
                        lightUp(svg);
                    }, 2000);

                    //按钮效果
                    svg.select("text#text_productbacklog").on("click",function(){
                        console.log("hello");
                        window.open('http://localhost:8000/app');
                    });



//                    console.log(svg.selectAll(".planet"));
//                    d3.timer(function() {
//                      var delta = (Date.now() - t0);
//
//                      svg.selectAll("#path5286").attr("transform", function() {
//                        return "translate(320,90) rotate(" + 20 + delta * 10/200 + ")";
//                      });
//                    });


               });

               function lightDown(svg){
//                    console.log(svg);
               }

               function lightUp(svg){
                   svg.select("path#path7323")
                    .attr("opacity",1)
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .each("end",function() { // as seen above
                        d3.select(this)       // this is the object
                          .attr("opacity",0)
                          .transition()
                          .duration(1000)
                          .delay(100);
                         });
                   svg.select("path#path8605")
                    .attr("opacity",1)
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .each("end",function() { // as seen above
                        d3.select(this)       // this is the object
                          .attr("opacity",0)
                          .transition()
                          .duration(1000)
                          .delay(100);
                         });
                   svg.select("path#path7323-7")
                    .attr("opacity",1)
                    .transition()
                    .duration(1000)
                    .delay(100)
                    .each("end",function() { // as seen above
                        d3.select(this)       // this is the object
                          .attr("opacity",0)
                          .transition()
                          .duration(1000)
                          .delay(100);
                         });
               }

          }};//end link
    }]);
});