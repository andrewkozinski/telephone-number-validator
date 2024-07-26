const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function handleResults() {

  if(userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  //const regex = /[1\\s]?([(][\d][\d][\d][)]|[\d][\d][\d])[\s-]?[\d][\d][\d][\s-]?[\d][\d][\d][\d]/;


  const regex = /^[1]?[\s]?([(][\d]{3}[)][\s]?[\d]{3}[\s-][\d]{4}|[\d]{3}[\s-]?[\d]{3}[\s-]?[\d]{4})$/;


  if(regex.test(userInput.value)) {
    results.innerHTML += `<p>Valid US number: ${userInput.value}</p>`;
  }
  else {
    results.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`;
  }
  
}

function handleClearButton() {
  results.innerHTML = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", handleResults);

clearBtn.addEventListener("click", handleClearButton);