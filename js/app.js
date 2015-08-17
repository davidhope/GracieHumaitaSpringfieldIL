//var app = angular.module('gracie',[]);

// one file
// NOTE: the immediately invoked function expression 
// is used to exemplify different files and is not required
(function(){
   // declaring the module in one file / anonymous function
   // (only pass a second parameter THIS ONE TIME as a redecleration creates bugs
   // which are very hard to dedect)
   angular.module('gracie',['ngRoute'])
    .config(function($routeProvider){
    $routeProvider
    	.when('/instructors',
    		{
    			templateUrl: '/gracie/templates/pages/instructors/index.html',
				controller: 'MainController',
				controllerAs: 'ctrl'
    		})
    	.when('/classes',
    		{
    			templateUrl: '/gracie/templates/pages/classes/index.html',
				controller: 'MainController',
				controllerAs: 'ctrl'
			})
    	.when('/',
    		{	
    			templateUrl: '/gracie/templates/pages/main.html',
				controller: 'MainController',
				controllerAs: 'ctrl'
			})
    	.otherwise({redirectTo: '/'})
  });             
})();