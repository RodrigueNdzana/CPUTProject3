var message = document.getElementsByClassName(".link");
var form = document.getElementsByClassName(".form");
$(".link").click(function () {
  $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  $(".register_form").css({ display: "block" });
});
message.click(function () {
  form.animate({ height: "toggle", opacity: "toggle" }, "slow");
});
addEventListener("click", function click() {
  form.style.display ="block";
});
