(function(){

	angular.module('wordModule', ['factoryModule'])


	.config([function() {
		console.log("Word Module:: config");
	}])

	.run([function() {
		console.log("Word Module:: running");
	}])



	.controller('WordController', ['$scope', 'DefinitionFactory', 'ShuffleFactory', '$http', function($scope, DefinitionFactory, ShuffleFactory, $http) {
		$scope.myWord = '';
		$scope.resultWord = '';


		/*

		$scope.shuffleText = function(){
			$scope.inputArray = $scope.myWord.split(' ');
			console.log("Inside the function");
			$scope.resultWord = ShuffleFactory.shuffle($scope.inputArray);
			console.log("Value assigned");
		}

		*/

		$scope.getDefinition = function(){
			//split the input using spaces
			$scope.inputArray = $scope.myWord.split(' ');

			//reset all arrays and counters
			$scope.targetArray = [];
			$scope.nouns = [];
			$scope.verbs = [];
			$scope.adjectives = [];
			$scope.adverbs = [];
			$scope.interjections = [];

			$scope.targetCounter = 0;
			$scope.nounCounter = 0;
			$scope.verbCounter = 0;
			$scope.adjectiveCounter = 0;
			$scope.adverbCounter = 0;
			$scope.interjectionCounter = 0;


			//main loop for words
			$scope.inputArray.forEach((word) => {

				$http.post('/define/' + word).success(function(data) {
					$scope.targetArray[$scope.inputArray.indexOf(word)] = word + ' ' + data;
					console.log($scope.inputArray.indexOf(word) + ': ' + word + ' ' + data);

					$scope.targetCounter = $scope.targetCounter + 1;

					if ($scope.targetCounter == $scope.inputArray.length) {
						$scope.resultWord = ShuffleFactory.shuffle($scope.targetArray);
						console.log("done");
					}
				});				

			});

			$scope.resultWord = $scope.targetArray;
			$scope.resultWord = ShuffleFactory.shuffle($scope.targetArray);
			console.log($scope.resultWord);
		}

	}])

})();