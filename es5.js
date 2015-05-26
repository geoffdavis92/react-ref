function expandList(src,itemType){
	var $src = $('p.'+src);
	var srcTxt = $src.text();
	var itemArr = srcTxt.split(' ');

	let colCount = 0;

	for(let i=0;i<itemArr.length;i++) {
		if(i % 25 !== 0) {
			let li = document.createElement('li');
			li.setAttribute('class','react'+itemType+'Item list-unstyled item-'+i);
			li.setAttribute('data-before', (i+1)+'.) ')
			let currentItem = itemArr[i].toString();
			$('div.'+itemType+'List div.row.'+itemType+'Row div.col-'+colCount).append(li);
			$('div.'+itemType+'List li.item-'+i).text(currentItem);
		} else {
			console.log('ColCount ++ => '+colCount);
			let li = document.createElement('li');
			li.setAttribute('class','react'+itemType+'Item list-unstyled item-'+i);
			li.setAttribute('data-before', (i+1)+'.) ')
			colCount += 1;
			let currentItem = itemArr[i].toString();
			$('div.'+itemType+'List div.row.'+itemType+'Row div.col-'+colCount).append(li);
			$('div.'+itemType+'List li.item-'+i).text(currentItem);
		}
	}
	$src.detach();
}

expandList('reactAttr','attr');
expandList('reactEl','el');