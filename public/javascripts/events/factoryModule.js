(function(){

	angular.module('factoryModule', [])


	.factory('DefinitionFactory', ['$http', function($http) {

		return {
			get: function(word) {
				var wordType = '';

				$http.post('/define/' + word).success(function(data) {
					console.log('wordType: ' + data);
					wordType = data;
				})


				return wordType;
			}
				//sends HTTP POST request to Server

		};
	}])


	.factory('ShuffleFactory', [function() {
		return {
			shuffle: function(array) {

				  var m = array.length, t, i;

				  // While there remain elements to shuffle
				  while (m) {
				    // Pick a remaining element…
				    i = Math.floor(Math.random() * m--);

				    // And swap it with the current element.
				    t = array[m];
				    array[m] = array[i];
				    array[i] = t;
				  }

				  return array;
			}
		};
	}])

	.config([function() {
		console.log("Word Module:: config");
	}])

	.run([function() {
		console.log("Word Module:: running");
	}])

})();
