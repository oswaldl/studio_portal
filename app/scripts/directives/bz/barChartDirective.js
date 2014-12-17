
define(['../module'], function (directives) {
    'use strict';
    directives.directive('barChartDirective', ['d3Service',function (d3Service) {
        return {
          restrict: 'EA',
          scope: {},
          link: function(scope, element, attrs) {
            d3Service.d3().then(function(d3) {
              var svg = d3.select(ele[0])
                .append('svg')
                .style('width', '100%');

              // Browser onresize event
              window.onresize = function() {
                scope.$apply();
              };

              // hard-code data
              scope.data = [
                {name: "Greg", score: 98},
                {name: "Ari", score: 96},
                {name: 'Q', score: 75},
                {name: "Loser", score: 48}
              ];

              // Watch for resize event
              scope.$watch(function() {
                return angular.element($window)[0].innerWidth;
              }, function() {
                scope.render(scope.data);
              });

              scope.render = function(data) {
                // our custom d3 code
              }
            });
          }};
    }]);
});