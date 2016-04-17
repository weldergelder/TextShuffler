angular.module('tShuffler', ['wordModule'])

.config([function() {
	console.log("Configuration hook");
}])

.run([function() {
	console.log("Run hook");
}])
