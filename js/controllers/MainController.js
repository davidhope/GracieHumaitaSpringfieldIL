/*app.controller('MainController', function(){
	this.message = 'wired up';
});
*/
// another file and/or another anonymous function
(function(){   
 // using the function form of use-strict...
 "use strict";
  // accessing the module in another. 
  // this can be done by calling angular.module without the []-brackets
  angular.module('gracie')
    .controller('MainController',['$scope', function($scope){
		this.message = 'all wired up';
	}]);


  	// appending another service/controller/filter etc to the same module-call inside the same file
    //.service('myservice', ['dep2', function(dep2){}]);

})();