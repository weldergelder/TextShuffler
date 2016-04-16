(function(){

	angular.module('wordModule', [])

	.factory('TestFactory', [function() {


		return {
			test: "The word is: "
		};
	}])

	.config([function() {
		console.log("Word Module:: config");
	}])

	.run([function() {
		console.log("Word Module:: running");
	}])

	.controller('WordController', ['$scope', 'TestFactory', '$http', function($scope, TestFactory, $http) {
		$scope.myWord = '';
		$scope.resultWord = '';
/*
		$scope.appendWord=function(input){
			$scope.resultWord = TestFactory.test + input;
		}
*/
		$scope.getDefinition=function(){
			$http.post('/define/' + $scope.myWord).success(function(data){
				$scope.resultWord = data;
			});
		}

		//$scope.outputWord = $scope.appendWord($scope.myWord);
	}])
})();