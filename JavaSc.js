window.onload = function(){
  let table = document.getElementById("cmimet");
  if(table){
    let rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      let duration = parseInt(cells[2].innerHTML);
      let monthlyPayment = parseInt(cells[3].innerHTML.replace("$", ""));
      if(!isNaN(duration) && !isNaN(monthlyPayment)){
        let totalPayment = duration * monthlyPayment;
        cells[4].innerHTML = "$" + totalPayment;
      }
    }
  }
};
