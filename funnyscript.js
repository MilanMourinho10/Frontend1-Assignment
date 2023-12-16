
let chosenNap = {name: "default value", cost: 0};
let chosenService = 0;
let totalCost = 0;

function setCost(value){
  if (typeof value !== 'undefined') {
    chosenService = value;
  }
  totalCost = chosenNap.cost + chosenService;
  document.getElementById("price").innerHTML = totalCost;
}

function orderAndSendEmail() {

  const email = document.getElementById('email').value;

  if (!email || !email.includes("@")) {
    return;
  }


      let ordernummer = getRandomOrderNumber();

    alert("Tack för din beställning utav " + chosenNap.name + "\nDin order har skickats till mail: " + email + "\nDitt ordernummer: " + ordernummer + "\nDin kostnad: " + totalCost+ "Kr");
}

function getRandomOrderNumber(){
    let ordernummer = '';
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      ordernummer += randomNumber.toString();
    }
  
    return ordernummer;
}

function setNaprapat(value){
  switch (value) {
    case "1":
      chosenNap = { name: "Zlatan Ibrahimovic", cost: 200 }
      break;
    case "2":
      chosenNap = { name: "Dejan Kulusevski", cost: 400 }
      break;
    case "3":
      chosenNap = { name: "Greta Thunberg", cost: 800 }
      break;
    default:
      break;
  }
  setCost()
}

function setServiceCost(value){
  switch (value) {
    case "1":
      setCost(500)
      break;
    case "2":
      setCost(800)
      break;
    case "3":
      setCost(300)
      break;
    case "4":
      setCost(150)
      break;
    case "5":
      setCost(250)
      break;
    default:
      break;
  }
}