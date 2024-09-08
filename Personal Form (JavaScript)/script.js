let registrationForm = document.getElementById("registration-form");
let inputName = document.getElementById("name");
let inputAddress = document.getElementById("address");
let inputEmail = document.getElementById("email");
let inputNumber = document.getElementById("phone");
let inputPassword = document.getElementById("password");
let inputZipCode = document.getElementById("zip");
let btnSubmit = document.getElementById("btn-submit");

let tableBody = document.getElementById("table-body");
tableBody.innerHTML = "";

let submittedData = [];

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {
    enteredName: inputName.value,
    enteredAddress: inputAddress.value,
    enteredEmail: inputEmail.value,
    enteredNumber: inputNumber.value,
    enteredPassword: inputPassword.value,
    enteredZipCode: inputZipCode.value,
  };
  submittedData.push(formData);
  displayData();
});

function displayData() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += `<tr id="table-data">
     <td>${index + 1}</td>
            <td id="table-name">${ele.enteredName}</td>
            <td id="table-address">${ele.enteredAddress}</td>
            <td id="table-number">${ele.enteredNumber}</td>
            <td id="table-email">${ele.enteredEmail}</td>
            <td id="table-password">${ele.enteredPassword}</td>
            <td id="table-zip">${ele.enteredZipCode}</td>
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger">Danger</button>
            </td>
          </tr>`;
  });
  tableBody.innerHTML = html;
}
