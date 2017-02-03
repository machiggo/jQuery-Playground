$(document).ready(function(){
	// -- 1
	$("#selected-plays > li").addClass("horizontal");
	//Alternativ über die Methode children
	//https://api.jquery.com/children/
	console.log( $("#selected-plays").children("li") );
	
	// Caching der id selected-plays 
	var $selected_plays = $("#selected-plays");
	
	// -- 2
	//$("#selected-plays li").find("li").addClass("sub-level");
	//$("#selected-plays li:not(.horizontal)").addClass("sub-level");
	$selected_plays
	.find("li")
	.not(".horizontal")
	.addClass("sub-level");
	
	// -- 3
	$selected_plays
	.find("a[href$=\".pdf\"]")
	.addClass("pdflink");
	
	$selected_plays
	.find("a[href^=\"mailto:\"]")
	.addClass("mailto");
	
	$selected_plays.
	find("a[href^=\"http\"][href*=\"henry\"]")
	.addClass("henrylink");
	
	// -- 4
	//nth-child ermittelt die Elementposition relativ zum Elternelement
	//nth-child beginnt als einziger Selektor beim Zählen mit index 1
	$("table tr:nth-child(odd)")
	.addClass("alt");
	
	//Alternativ mit jQuery-Pseudoselektoren
	//odd, even beginnen wie eq bei 0 (gerade)
	console.log(
		$("table:eq(0) tr:even,table:eq(1) tr:even ")
		
	)
	// -- 5
	$("td:contains('Henry') ~ td").addClass("highlight");
	
	console.log( 
		$("td:contains('Henry')").nextAll("td")
	);
	console.log( 
		$("td:contains('Henry')").parent().find("td:eq(1), td:eq(2)")
	);
		
	console.log( 
		$("table:first-of-type tr:nth-child(1n+6) td:nth-of-type(1n+2)")
	);
	
	console.log( 
		$("td:contains('History'), td:contains('History')+td")
	);
	
	console.log(
		$("tr td:contains('Henry')").nextUntil("tr")
	);
	
});

/*
Darstellung siehe u_selektoren.jpg


Nutzen Sie die CSS-Datei um über jQuery den Elementen die benötigen Klassen beim Laden 
der Seite hinzuzufügen.

Beispiel:
1. Listenelemente die direkt Nachfahren der id selected-plays sind erhalten die Klasse horizontal.
2. Listenelemente die nicht die Klasse horizontal haben erhalten die Klasse sub-level
(li Nachfahren innerhalb der id selected-plays die nicht die Klasse horizontal haben)

3. Links formatieren über CSS Attribut Selektoren
http://www.mediaevent.de/css/css-selektor-attributselektor.html

mailto
pdflink
henrylink

4. Table Plays und Sonnets abwechselnd farbig markieren (Zebra-Tabelle)

5. Tabelle Plays
Henry IV, Part I	History	1596
Henry V				History	1599
Jeweils History und Jahreszahl mit der Klasse highlight hervorheben


*/
	


