var express = require('express');
var dict = require('dictionaryapi');
const XMLExtract = require('xml-extract');

var router = express.Router();

/* GET home page. */
router.route('/define/:reqWord')
	
	.post(function(req, res){

		try {
			//using the thesaurus dictionary
			var dic = new dict.DictionaryAPI(dict.THESAURUS, '5e666446-bea4-4079-8081-eadfe33f8365');
			dic.query(req.params.reqWord, function(err, result){
				console.log(req.params.reqWord);

				XMLExtract(result, 'fl', false, (error, element) => {
					if(error) {
						console.log(error);
					}

					res.send(element);
					console.log(element);
				});

			});
		}

		catch (e) {
			console.log('[' + e.name + ']' + e.message);
			res.send({message: 'error has occurred'});
		}

	});


module.exports = router;