// business logic
function getDisneyCharacter(color, quote, word) {
  if(color == "Red" || "Black" || "Yellow" && quote == "quote1")
    $("#mickey").show();
  else if(color == "Blue" || "Yellow" && quote === "quote2" && noun == "Spaz")
    $("#dory").show();
  // else if(color)

}

// user interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var name = $("#name").val();
    var color = $("#color option:selected").text();
    var quote = $('input[name=quote]:checked').val();
    // var place = $('input[name=quote]:checked').val();
    var noun = $("#noun option:selected").text();
    // alert("name = " + name + " color = " + color + " quote = " + quote + " word = " + wordDescribe);

    getDisneyCharacter(color, quote, wordDescribe);
    event.preventDefault();

  });
});
