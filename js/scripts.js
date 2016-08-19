//business logic
function pingPong(num) {
	for (i = 1; i <= num; i++) {
		if (i % 15 === 0) {
			return "ping pong";
		}
    else if  (i % 5 === 0) {
			return "pong";
		}
    else if (i % 3 === 0) {
			return "ping";
		}
    else {
		    return i;
		}
	}
}

//UI Logic
$(document).ready(function() {
  $("#pongForm").submit(function(event) {
    var pongInput = parseInt($("#pongInput").val());
        alert(pongInput)
    var pongResult = pingPong(pongInput);
    $("#pongResult").text(pongResult);
    event.preventDefault();
  });
});

  // function romanConvert(num) {
  //   // alert(num);
  //   if (typeof num !== 'number')
  //   return false;
  //   var digits = String(+num).split(""),

  //   roman_num += (key[+digits.pop() + (i * 10)] || "");
  //   return Array(+digits.join("") + 1).join("M") + roman_num;
  // }
  //
  // $(document).ready(function() {
  //   $("#romanForm").submit(function(event) {
  //     var rInput = parseInt($("#romanInput").val());
  //     var rResult = romanConvert(rInput);
  //     $("#romanResult").text(rResult);
  //       event.preventDefault();
  //   });
