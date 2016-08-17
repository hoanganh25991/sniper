//them vao ne, link di
console.log("user function work");

$(document).ready(function(){
	//fancybox on image
	$('a').each(function(index){
		var a = $(this);

		var aHref = a.attr('href');

		var isImageLink = aHref ? aHref.includes('uploads') : false;

		if(isImageLink){
			a.fancybox();
			a.on('click', function(e){
				console.log('stop stopPropagation');
				e.stopPropagation();
			});
		}
	});

	//click on row, view or edit
	var clickOnRowGo = function(table){
		table.find('tr').each(function(){
			var row = $(this);

			var a, aHref, moveToLink;

			a = row.find('a.ewEdit');

			aHref = a.attr('href');

			moveToLink = aHref ? aHref : false;

			if(moveToLink){
				row.on('click', function(){
					window.location = moveToLink;
				});
				return;
			}

			//check if this row allow 'move to view'
			a = row.find('a.ewView');

			aHref = a.attr('href');

			moveToLink = aHref ? aHref : false;

			if(moveToLink){
				row.on('click', function(){
					window.location = moveToLink;
				});
				return;
			}

			//refactor code
			// var findWhere = ['a.ewEdit', 'a.ewView'];

			// var findLenght = findWhere.length;

			// var isBinded = false;

			// var findIndex = 0;

			// while(!isBinded && findIndex < findLenght){
			// 	findIndex++;
				
			// 	// a = row.find('a').find(findWhere[findIndex]);
			// 	a = row.find(findWhere[findIndex]);

			// 	aHref = a.attr('href');

			// 	moveToLink = aHref ? aHref : false;

			// 	if(moveToLink){
			// 		row.on('click', function(){
			// 			window.location = moveToLink;
			// 		});
			// 		isBinded = true;
			// 	}
			// }
		});
	};

	//apply to all table data
	$('table').each(function(){
		var table = $(this);

		var tableId = table.attr('id');

		var isDataTable = tableId ? tableId.includes('tbl_') : false;

		if(isDataTable){
			clickOnRowGo(table);
		}
	});
});	
// $('img').fancybox();