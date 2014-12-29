define(['services/module'],
    function(services){
        "use strict";
        services.service('almSvgService', ['ipCookie', '$http', function(ipCookie, $http){
            console.log('authService');
            var currentUser = ipCookie('user') || {userName:'',roles:null};
            var currentBoxNumber = 0;
            var oneLineNumber = 15;

            return {
                addSampleBox: function(d3) {
                   var svg = d3.select("svg");
                   var mySquare=svg.append("rect")
                                         .attr("style","fill:#888888;fill-opacity:0.3761468;stroke:#7eec1e;stroke-width:0.49491096;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.11009174;stroke-dasharray:none")
                                         .attr("x",24)
                                         .attr("y",5)
                                         .attr("width",6)
                                         .attr("height",6);
                    mySquare.transition()
                         .attr("y",37)
                         .duration(1000) // this is 1s
                         .delay(100)
                         .each("end",function() { // as seen above
                            d3.select(this)       // this is the object
                              .transition()         // a new transition!
                                .attr("x",150)    // we could have had another
                                .duration(1000) // this is 1s
                                .delay(100)
                                .each("end",function() { // as seen above
                                     d3.select(this)       // this is the object
                                       .transition()         // a new transition!
                                         .attr("y",185)    // we could have had another
                                         .duration(1000) // this is 1s
                                         .delay(100)
                                         .each("end",function() { // as seen above
                                              //add new box
                                              var xmove = 6*Math.floor(currentBoxNumber%oneLineNumber);
                                              var ymove = 6*Math.floor(currentBoxNumber/oneLineNumber);
                                              svg.append("rect")
                                                   .attr("style","fill:#888888;fill-opacity:0.3761468;stroke:#7eec1e;stroke-width:0.49491096;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.11009174;stroke-dasharray:none")
                                                   .attr("x",200-xmove)
                                                   .attr("y",203-ymove)
                                                   .attr("width",6)
                                                   .attr("height",6);
                                              currentBoxNumber++;
                                             d3.select(this)       // this is the object
                                               .transition()         // a new transition!
                                                 .attr("x",600)    // we could have had another
                                                 .duration(3000) // this is 1s
                                                 .delay(100)
                                                 .each("end",function() {
                                                     d3.select(this).       // so far, as above
                                                       remove();            // we delete the object instead
                                                    });
                                            })
                                    })
                           });
                },
            };
        }])
    }
);