

document.addEventListener("DOMContentLoaded", () => {
// Get the modal
var modal = document.getElementById("myModal");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    };
  
  //card options
  const wizard = {
    name: "wizard",
    img: "./images/1wizard.svg",
  };
  const dwarf = {
    name: "dwarf",
    img: "./images/2dwarf.svg",
  };
  const elf = {
    name: "elf",
    img: "./images/3elf.svg",
  };
  const queen = {
    name: "queen",
    img: "./images/4queen.svg",
  };
  const prince = {
    name: "prince",
    img: "./images/5prince.svg",
  };
  const frogPrince = {
    name: "frogPrince",
    img: "./images/6fprince.svg",
  };
  const fairy = {
    name: "fairy",
    img: "./images/7fairy.svg",
  };
  const unicorn = {
    name: "unicorn",
    img: "./images/8unicorn.svg",
  };

    // const cardArray = [
    //   wizard,
    //   dwarf,
    //   elf,
    //   queen,
    //   prince,
    //   frogPrince,
    //   fairy,
    //   unicorn,
    //   wizard,
    //   dwarf,
    //   elf,
    //   queen,
    //   prince,
    //   frogPrince,
    //   fairy,
    //   unicorn,
    // ];
    //array to test that everything works fine
 const cardArray = [wizard, dwarf, wizard, dwarf];

  function sortCards() {
    cardArray.sort(() => 0.5 - Math.random());
  }

  sortCards();

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];

  //tiempo
  let timer = 0;
  setInterval(() => {
    timer++;
    console.log(timer);
    document.querySelector("#timer").textContent = timer;
  }, 1000);

  //contador
  var counter = 0;
  document.querySelector("#counter").textContent = counter;

  // Crear tablero
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "./images/colors.svg");
      card.setAttribute("data-id", i);
      card.classList.add("mystyle");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    console.log(counter);
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      let img1 = cards[optionOneId].setAttribute("src", "./images/colors.svg");
      let img2 = cards[optionTwoId].setAttribute("src", "./images/colors.svg");
      img1.classList.add("mystyle");
      img2.classList.add("mystyle");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      //   cards[optionOneId].setAttribute("src", "./images/white.svg");
      //   cards[optionTwoId].setAttribute("src", "./images/white.svg");
      let card1 = cards[optionOneId];
      let card2 = cards[optionTwoId];
      card1.removeEventListener("click", flipCard);
      card2.removeEventListener("click", flipCard);
      card1.classList.add("mystyle");
      card2.classList.add("mystyle");
        card1.style.border = "3px solid black"
        card2.style.border = "3px solid black"
      cardsWon.push(cardsChosen);
    } else {
      setTimeout(() => {
        cards[optionOneId].setAttribute("src", "./images/colors.svg");
        cards[optionTwoId].setAttribute("src", "./images/colors.svg");
        cards[optionOneId].classList.add("mystyle");
        cards[optionTwoId].classList.add("mystyle");
      }, 3000);
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardArray.length / 2) {
        //alert shows up
        document.getElementById("alert").style.display = "block"
    }
    }


  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    counter++;
    document.querySelector("#counter").textContent = counter;
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

    createBoard();
    
    document.getElementById("mybutton").addEventListener("click", () => {
        window.location.reload()
    })
    function newGame() {
       
        // setTimeout(() => {
        //     //hide the alert and reload
        //       document.getElementById("alert").style.display = "none";
        //       
            
        // }, 3000)
    }
});
