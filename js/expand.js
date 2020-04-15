var phrases = [
  "Kevin",
  "Kevin Peter He",
  "Kevin Peter He is passionate about exploring",
  "Kevin Peter He is passionate about exploring issues around identity",
  "Kevin Peter He is passionate about exploring issues around identity in the context of technology and politics",
  "Kevin Peter He is passionate about exploring issues around identity in the context of technology and politics through stories",
  "Kevin Peter He is passionate about exploring issues around identity in the context of technology and politics through stories that connect the virtual",
  "Kevin Peter He is passionate about exploring issues around identity in the context of technology and politics through stories that connect the virtual with the physical"
]

$("input").on("input", function(){

  var value = $(this).val()
  var phrase = phrases[value]
  $("div.phrase").html(phrase)
})