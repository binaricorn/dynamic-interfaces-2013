

		$('body').append('<div class="draggable"><form name=editor><input name=name class="commentBox"><textarea name=data cols =41 rows =10 id="hideMe">0</textarea><input type=button value="SUBMIT" id="doSetItem"></script></form></div>');
		
		// $(".draggable").css('background', 'rgba(255,0,0,0.50)');
		// $(".draggable2").css('background', 'rgba(0,0,255,0.10)');

		
		$(function() { 
 			$( ".draggable" ).draggable({ cursor: "move", cursorAt: { top: 56, left: 56 } });
 			$("input#doSetItem").click(function(){ 				
 				// Get element coordinates on screen
		       	var offset=$(this).offset();
		       	//console.log(this.tagName + "coords (" + offset.left + ", " + offset.top + ") ");

		       	$('textarea#hideMe').replaceWith('<textarea name=data cols=41 rows=10 id="hideMe">' + offset.left + ", " + offset.top + '</textarea>');

		       	// Store values in local storage
		       	var name = document.forms.editor.name.value;
		       	var data = document.forms.editor.data.value;
		       	localStorage.setItem(name, data);

		       	var array = data.split(",");

		       	for (var i in array) {
		       		//alert(i + " : " + array[i]);
		       		$( ".draggable" ).css('top', array[0] + 'px');
		       	}


		       	doShowAll();
 			});
 		});

		

 		function doShowAll() {
       		var key = "";
       		var store="doSetItem";
       		var i=0;
       		for (i=0; i<=localStorage.length-1; i++) {
         		key = localStorage.key(i);
         		store += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>\n";
       		}
       	 	if(store == "<tr><th>name</th></tr>\n"){
       	 		store += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
       			document.getElementById('store').innerHTML = store;
       		}

	   	};


		


var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('mystyles.css');
document.head.appendChild(style);

