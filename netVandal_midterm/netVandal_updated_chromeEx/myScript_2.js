$('body').append('<div class="draggable"><form name=editor><input name=name class="commentBox1" value="Comment me"><textarea name=data cols =41 rows =10 id="hideMe">0</textarea><input type=button value="SUBMIT" class="doSetItem1"></form></div><div class="draggable2"><form name=editor><input name=name class="commentBox2"><textarea name=data cols =41 rows =10 id="hideMe">0</textarea><input type=button value="SUBMIT" class="doSetItem2"></script></form></div><div class="draggable3"><form name=editor><input name=name class="commentBox3"><textarea name=data cols =41 rows =10 id="hideMe">0</textarea><input type=button value="SUBMIT" class="doSetItem3"></script></form></div><div class="draggable4"><form name=editor><input name=name class="commentBox4"><textarea name=data cols =41 rows =10 id="hideMe">0</textarea><input type=button value="SUBMIT" class="doSetItem4"></script></form></div><div id="netVandalBox"><div id="netVandalBox-content"><h2>Net Vandal is turned on</h2> - Vandalize your favorite news sources with comments!</div></div>');

	
	// Browser Cookies
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}


	
	var ReadxPos = readCookie('Cookie_Toolbar_PosX')
	var ReadyPos = readCookie('Cookie_Toolbar_PosY')
	var ReadxPos2 = readCookie('Cookie_Toolbar_PosX2')
	var ReadyPos2 = readCookie('Cookie_Toolbar_PosY2')
	var ReadxPos3 = readCookie('Cookie_Toolbar_PosX3')
	var ReadyPos3 = readCookie('Cookie_Toolbar_PosY3')
	var ReadxPos4 = readCookie('Cookie_Toolbar_PosX4')
	var ReadyPos4 = readCookie('Cookie_Toolbar_PosY4')
	var storeInput1 = readCookie('Cookie_Toolbar_input1')
	var storeInput2 = readCookie('Cookie_Toolbar_input2')
	var storeInput3 = readCookie('Cookie_Toolbar_input3')
	var storeInput4 = readCookie('Cookie_Toolbar_input4')
	$('input.commentBox1').val(storeInput1);
	$('input.commentBox2').val(storeInput2);
	$('input.commentBox3').val(storeInput3);
	$('input.commentBox4').val(storeInput4);

	$( ".draggable" ).css("margin-left", ReadxPos + 'px');
	$( ".draggable" ).css("margin-top", ReadyPos + 'px');
	$( ".draggable2" ).css("margin-left", ReadxPos2 + 'px');
	$( ".draggable2" ).css("margin-top", ReadyPos2 + 'px');
	$( ".draggable3" ).css("margin-left", ReadxPos3 + 'px');
	$( ".draggable3" ).css("margin-top", ReadyPos3 + 'px');
	$( ".draggable4" ).css("margin-left", ReadxPos4 + 'px');
	$( ".draggable4" ).css("margin-top", ReadyPos4 + 'px');


	//Draggable toolbar
	$(function() {

		$("input.doSetItem1").click(function(){ 
			$("input.commentBox1").keyup(function () {
				var value = $('input.commentBox1').val();
				createCookie('Cookie_Toolbar_input1', value, 0)
			}).keyup();
		});

		$("input.doSetItem2").click(function(){ 
			$("input.commentBox2").keyup(function () {
				var value = $('input.commentBox2').val();
				createCookie('Cookie_Toolbar_input2', value, 0)
			}).keyup();
		});


		$("input.doSetItem3").click(function(){ 
			$("input.commentBox3").keyup(function () {
				var value = $('input.commentBox3').val();
				createCookie('Cookie_Toolbar_input3', value, 0)
			}).keyup();
		});

		$("input.doSetItem4").click(function(){ 
			$("input.commentBox4").keyup(function () {
				var value = $('input.commentBox4').val();
				createCookie('Cookie_Toolbar_input4', value, 0)
			}).keyup();
		});

	    $( ".draggable" ).draggable(
	        {
	            drag: function(){
	                var offset = $(this).offset();
	                var xPos = offset.left;
	                var yPos = offset.top;
	            },

	            stop: function(event, ui) {
	              var offset = $(this).offset();
	              var xPos = offset.left;
	              var yPos = offset.top;
	              createCookie('Cookie_Toolbar_PosX', xPos, 0)
	              createCookie('Cookie_Toolbar_PosY', yPos, 0)
	            }

	        }

	  );


	  $( ".draggable2" ).draggable(
	        {
	            drag: function(){
	                var offset = $(this).offset();
	                var xPos = offset.left;
	                var yPos = offset.top;
	                console.log(xPos);
	                console.log(yPos);
	            },

	            stop: function(event, ui) {
	              var offset = $(this).offset();
	              var xPos = offset.left;
	              var yPos = offset.top;
	              createCookie('Cookie_Toolbar_PosX2', xPos, 0)
	              createCookie('Cookie_Toolbar_PosY2', yPos, 0)
	            }

	        }

	  );

	  $( ".draggable3" ).draggable(
	        {
	            drag: function(){
	                var offset = $(this).offset();
	                var xPos = offset.left;
	                var yPos = offset.top;
	                console.log(xPos);
	                console.log(yPos);
	            },

	            stop: function(event, ui) {
	              var offset = $(this).offset();
	              var xPos = offset.left;
	              var yPos = offset.top;
	              createCookie('Cookie_Toolbar_PosX3', xPos, 0)
	              createCookie('Cookie_Toolbar_PosY3', yPos, 0)
	            }

	        }

	  );

	  $( ".draggable4" ).draggable(
	        {
	            drag: function(){
	                var offset = $(this).offset();
	                var xPos = offset.left;
	                var yPos = offset.top;
	                console.log(xPos);
	                console.log(yPos);
	            },

	            stop: function(event, ui) {
	              var offset = $(this).offset();
	              var xPos = offset.left;
	              var yPos = offset.top;
	              createCookie('Cookie_Toolbar_PosX4', xPos, 0)
	              createCookie('Cookie_Toolbar_PosY4', yPos, 0)
	            }

	        }

	  );

	});

		

		
// The Content Script stuff

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('mystyles.css');
document.head.appendChild(style);

