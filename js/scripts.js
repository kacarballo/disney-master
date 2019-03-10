// business logic
function getDisneyCharacter(color, quote, noun) {
  if(color == "red" || "black" || "yellow" && quote == "quote1" && noun == "playful")
    $("#mickey").show();
  else if(color == "blue" || "yellow" && quote == "quote2" && noun == "spaz" || "sassy")
    $("#dory").show();
  else if(color == "yellow" || "red" || "orange" && quote == "quote3" && noun == "cuddly")
    $("#winnie").show();
  else if(color == "blue" || "red" || "green" && quote == "quote4" && noun == "optimistic")
    $("#moana").show();
  else if(color == "yellow" || "red" || "orange" && quote == "quote5" && noun == "regal" || "sassy")
    $("#mufasa").show();
  else if(color == "blue" || "white" || "orange" && quote == "quote6" && noun == "spaz" || "sassy")
    $("#olaf").show();
}

// user interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var name = $("#name").val();
    var color = $("#color option:selected").text();
    var quote = $('input[name=quote]:checked').val();
    // var place = $('input[name=quote]:checked').val();
    var noun = $("#noun option:selected").text();
    alert("name = " + name + " color = " + color + " quote = " + quote + " word = " + wordDescribe);

    getDisneyCharacter(color, quote, wordDescribe);
    event.preventDefault();

  });
});
