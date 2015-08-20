(function(){   
	angular.module('gracie')
		.directive('slider', function()
		{
			 return {
				     restrict: 'E',
				     scope: {
				       info: '='
				     },
				     /*link: function($scope, $elem, attrs){
			     		 $('.main-flex-slider').flexslider({
						      slideshowSpeed: 5000,
						      directionNav: false,
						      animation: "fade"
						  });
				     },*/
				     templateUrl: 'assets/js/directives/slider.html'
				   };
		});           
})();