//calculation for book in the home page
// first book
function myquantfunc() {
    var myqunt = document.getElementById("valuequantityNum").value;
    var myprice = document.getElementById("firstPrice").innerText;
    console.log(myprice + " first price");
    var totalPrice = myqunt * myprice;
    document.getElementById("currentPrice").innerHTML = "R " + totalPrice;
  }
  // second book
  function myquantfuncbook2() {
    var myqunttwo = document.getElementById("valuequantityNumtwo").value;
    var mypricetwo = document.getElementById("firstPricetwo").innerText;
    var totalPricetwo = myqunttwo * mypricetwo;
    document.getElementById("currentPricetwo").innerHTML = "R " + totalPricetwo;
  }
  // third book
  function myquantfuncbook3() {
    var myquntthree = document.getElementById("valuequantityNumthree").value;
    var mypricethree = document.getElementById("firstPricethree").innerText;
    var totalPricethree = myquntthree * mypricethree;
    document.getElementById("currentPricethree").innerHTML =
      "R " + totalPricethree;
  }
  //fouth book
  function myquantfuncbook4() {
    var myquntthree = document.getElementById("valuequantityNumfour").value;
    var mypricethree = document.getElementById("firstPricefour").innerText;
    var totalPricethree = myquntthree * mypricethree;
    document.getElementById("currentPricefour").innerHTML =
      "R " + totalPricethree;
  }
  