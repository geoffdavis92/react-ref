'use strict';

function expandList(src, itemType) {
	var $src = $('p.' + src);
	var srcTxt = $src.text();
	var itemArr = srcTxt.split(' ');

	var colCount = 0;

	for (var i = 0; i < itemArr.length; i++) {
		if (i % 25 !== 0) {
			var li = document.createElement('li');
			li.setAttribute('class', 'react' + itemType + 'Item list-unstyled item-' + i);
			li.setAttribute('data-before', i + 1 + '.) ');
			var currentItem = itemArr[i].toString();
			$('div.' + itemType + 'List div.row.' + itemType + 'Row div.col-' + colCount).append(li);
			$('div.' + itemType + 'List li.item-' + i).text(currentItem);
		} else {
			console.log('ColCount ++ => ' + colCount);
			var li = document.createElement('li');
			li.setAttribute('class', 'react' + itemType + 'Item list-unstyled item-' + i);
			li.setAttribute('data-before', i + 1 + '.) ');
			colCount += 1;
			var currentItem = itemArr[i].toString();
			$('div.' + itemType + 'List div.row.' + itemType + 'Row div.col-' + colCount).append(li);
			$('div.' + itemType + 'List li.item-' + i).text(currentItem);
		}
	}
	$src.detach();
}

expandList('reactAttr', 'attr');
expandList('reactEl', 'el');
