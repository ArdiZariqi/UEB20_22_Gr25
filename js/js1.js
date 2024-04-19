//per formen logIn
function validateForm() {
  try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("Password").value;
      if (!email) throw "Email field is required.";
      if (!password) throw "Password field is required.";
      if (!validateEmail(email)) throw "Invalid email address.";
      validatePassword(password);
      return true;
  } catch (err) {
      alert(err);
      return false;
  }
}

function validatePassword(password) {
  if(password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password))
    throw "Password must be at least 8 characters, contain one number and one uppercase letter.";
}


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//per formen ne main website (apliko tani)
function submitForm(e) {
  e.preventDefault();
  let isValid = true;
  const emri = document.getElementById("emri");
  const email = document.getElementById("email");
  const tel = document.getElementById("tel");
  const selekto = document.getElementById("Trajnimet");

  if (emri.value.length == "") {
      isValid = false;
      document.getElementById("emriError").innerHTML = "Duhet te plotesohet fusha per emer";
  } else {
      document.getElementById("emriError").innerHTML = "";
  }

  if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
      isValid = false;
      document.getElementById("emailError").innerHTML = "Emaili duhet te jete valid";
  } else {
      document.getElementById("emailError").innerHTML = "";
  }

  if (tel.value.length !== 9) {
      isValid = false;
      document.getElementById("telError").innerHTML = "Numri i telefonit duhet te jete 9 karaktere";
  } else {
      document.getElementById("telError").innerHTML = "";
  }
  if (selekto.value.length == "Zgjedhni trajnimin") {
    isValid = false;
    document.getElementById("selectError").innerHTML = "Zgjedhni nje trajnim qe deshironi ta ndjekni";
} else {
    document.getElementById("selectError").innerHTML = "";
}

  if (isValid) {
      // submit form
      form.submit(); 
      
  }
}

//Pjesa te fullstack (Cfare perfshihet)
window.onload = function() {
  const categories = ["Mentorim", "Qasje në tablet/smartphone", "Certifikata e zotërimit të kursit", "Përgatitje falas për provimin", "Karta e Studentit", "Trajnime online", "Trajnime fizikisht"];
  const list = document.getElementById("categories-list");
  for (let i = 0; i < categories.length; i++) {
      const item = document.createElement("li");
      item.innerHTML = categories[i];
      list.appendChild(item);
  }
};


//Per formen ne footer
/*
$(document).ready(function() {
  $("btn").click(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var valid = true;

    if (!validateName(name)) {
      alert("Emri dhe mbiemri nuk është i vlefshëm!");
      valid = false;
    }

    if (!validateEmail(email)) {
      alert("Emaili nuk është i vlefshëm!");
      valid = false;
    }

    if (!validatePhone(phone)) {
      alert("Numri i telefonit nuk është i vlefshëm!");
      valid = false;
    }

    if (valid) {
      alert("Forma është e vlefshme dhe mund të dërgohet!");
    }
  });
});

function validateName(name) {
  var re = /^[a-zA-Z ]+$/;
  return re.test(name);
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((0-9]{1,3}+.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }
  
  function validatePhone(phone) {
  var re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return re.test(phone);
}

//Konstruktori i objektit
function Trajnimi(pyBenefits) {
  this.pyBenefits = pyBenefits;
}
*/
/*
//Krijimi i instancave të objekteve
var pyTrajnimi = new Trajnimi(["Njohuri të avancuara për Python", "Praktikë pasi të përfundohet trajnimi", "Referencë pune nga kompania Sharp Group"]);
var pyCertifikata = new Trajnimi(["1 certifikatë nga B.I.T","Certifikata online"]);
var pyKonsulenca = new Trajnimi(["Njohuri se si të fitoni punë online", "Konsulencë të vazhdueshme falas nga ekspertët tanë"]);

// Thirrja e funksionit per te shfaqur përfitimet e trajnimit të Python në HTML
document.addEventListener("DOMContentLoaded", function(){
var pyBenefits = document.getElementById("pyBenefits");
var pyCertifikata = document.getElementById("pyCertifikata");
var pyKonsulenca = document.getElementById("pyKonsulenca");
pyTrajnimi.pyBenefits.forEach(function(benefit){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(benefit));
  pyBenefits.appendChild(li);
});
pyCertifikata.pyBenefits.forEach(function(benefit){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(benefit));
  pyCertifikata.appendChild(li);
});
pyKonsulenca.pyBenefits.forEach(function(benefit){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(benefit));
  pyKonsulenca.appendChild("li");
});
});

//krijimi i objekteve dhe instancimi i tyre
function Training(name, duration, cost) {
  this.name = name;
  this.duration = duration;
  this.cost = cost;
}

let digitalMarketing = new Training("Digital Marketing", "4 weeks", "$1000");
let graphicDesign = new Training("Graphic Design", "6 weeks", "$1500");
let fullStackDevelopment = new Training("Full Stack Development", "8 weeks", "$2000");

function Course(name, duration, cost, instructor) {
  this.name = name;
  this.duration = duration;
  this.cost = cost;
  this.instructor = instructor;
}

let cyberSecurity = new Course("Cyber Security", "10 weeks", "$3000", "John Doe");
let python = new Course("Python", "12 weeks", "$3500", "Jane Smith");
let mobileApp = new Course("Mobile App Development", "8 weeks", "$4000", "Bob Johnson");

function Employee(name, title, salary) {
  this.name = name;
  this.title = title;
  this.salary = salary;
}

let employee1 = new Employee("Mike", "Developer", "$75,000");
let employee2 = new Employee("Emily", "Designer", "$70,000");
let employee3 = new Employee("Jacob", "Manager", "$85,000");
*/

