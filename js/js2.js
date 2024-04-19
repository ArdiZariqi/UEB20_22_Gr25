window.addEventListener("load", function() {
    // Get the table element by its id
    let table = document.getElementById("training-table");
  
    if(table){
      // Loop through each row of the table
      for (let i = 0; i < table.rows.length; i++) {
        // Get the duration, price per month, and total price cells
        let durationCell = table.rows[i].cells[1];
        let pricePerMonthCell = table.rows[i].cells[2];
        let totalPriceCell = table.rows[i].cells[3];
  
        // Get the values in the duration and price per month cells
        let duration = parseFloat(durationCell.innerHTML);
        let pricePerMonth = parseFloat(pricePerMonthCell.innerHTML);
  
        // Check if the duration is not a number
        if (isNaN(duration)) {
          console.log("Kohezgjatja nuk eshte valide, duhet te jete numer.");
        }
        // Check if the price per month is higher than the maximum value for a number
        if (pricePerMonth > Number.MAX_VALUE) {
          console.log("Cmimi per muaj nuk eshte valid, po e kalon maksimumin e vleres per nje numer.");
        }
        // Calculate the total price
        let totalPrice = duration * pricePerMonth;
  
        // Format the total price in exponential notation
        let totalPriceExp = totalPrice.toExponential();
  
        // Convert the totalPriceExp to a number
        let totalPriceNumber = Number(totalPriceExp);
  
        // Add the total price to the total price cell
        totalPriceCell.innerHTML = totalPriceNumber;
  
        // Convert the duration from a number to a string and add " months" to it
        durationCell.innerHTML = duration.toString() + " muaj";
      }
    }else{
      console.log("Elementi i tabeles me id-ne id 'training-table' nuk eshte gjetur.")
    }
    document.getElementById("training-table").rows[0].cells[1].innerHTML = "Kohezgjatja";
    document.getElementById("training-table").rows[0].cells[3].innerHTML = "Cmimi total";
    var text = document.getElementById("training-table").rows[1].cells[0].innerHTML;
    var match = text.match("Design");
    console.log(match);

  });
  
  //Creating listItems using JavaScript objects
window.addEventListener("load", function() {
  // Define the object constructor
  function Benefit(description) {
      this.description = description;
  }
  
  // Create instances of the object
  const advancedDigitalMarketing = new Benefit("Njohuri të avancuara për Digital Marketing");
  const jobPractice = new Benefit("Praktikë pasi të përfundohet trajnimi");
  const referenceJob = new Benefit("Referencë pune nga kompania Sharp Group");
  const certificateBIT = new Benefit("1 certifikatë nga B.I.T");
  const certificateOnline = new Benefit("Certifikata online");
  const onlineJob = new Benefit("Njohuri se si të fitoni punë online");
  const continuousAdvice = new Benefit("Konsulencë të vazhdueshme falas nga ekspertët tanë");
  
  // Create an array with the instances of the object
  const benefits = [advancedDigitalMarketing, jobPractice, referenceJob, certificateBIT, certificateOnline, onlineJob, continuousAdvice];
  
  // Create the list element
  const list = document.getElementById('ul');
  
  // Add the benefits to the list
  benefits.forEach((benefit) => {
      const item = document.createElement('li');
      item.innerHTML = benefit.description;
  });
  });

  const d = new Date("2023-03-25");
console.log(d);