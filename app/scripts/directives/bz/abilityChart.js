
define(['../module', 'd3'], function (directives, d3) {
    'use strict';
    directives.directive('abilityChart', ['$parse', function ($parse) {
        return {
          restrict: 'EA',
          scope: {},
          link: function(scope, elem, attrs) {
               var dataset = [ 5, 10, 13, 19];


               d3.xml("http://localhost:8000/app/images/ability.svg", "image/svg+xml", function(xml) {
                    elem[0].appendChild(xml.documentElement);
                    var svg = d3.select("svg");



               });


          }};//end link
    }]);
});