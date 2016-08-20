//business logic
$(document).ready(function() {
	var pingPong = function(num) {
		var pongArray = [];
		for (i = 1; i <= num; i++) {
			if (i % 15 === 0) {
				pongArray.push("ping pong");
			}
		  else if  (i % 5 === 0) {
				pongArray.push("pong");
			}
		  else if (i % 3 === 0) {
				pongArray.push("ping");
			}
		  else {
			  pongArray.push(i);
			}
		}
		return pongArray;
	}

//UI Logic

$("#pongForm").submit(function(event) {
  var pongInput = parseInt($("#pongInput").val());
  var pongResult = pingPong(pongInput);
	pongResult.forEach(function(pongItem) {
		$("ul").append("<li>" + pongItem + "</li>");
	});
  event.preventDefault();
  });
});
