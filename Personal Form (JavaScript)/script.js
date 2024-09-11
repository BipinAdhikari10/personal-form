// let registrationForm = document.getElementById("registration-form");
// let inputName = document.getElementById("name");
// let inputAddress = document.getElementById("address");
// let inputEmail = document.getElementById("email");
// let inputNumber = document.getElementById("phone");
// let inputPassword = document.getElementById("password");
// let inputZipCode = document.getElementById("zip");
// let btnSubmit = document.getElementById("btn-submit");

// let tableBody = document.getElementById("table-body");
// tableBody.innerHTML = "";

// let submittedData = [];
// let edit_index = null;

// registrationForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let formData = {
//     enteredName: inputName.value,
//     enteredAddress: inputAddress.value,
//     enteredEmail: inputEmail.value,
//     enteredNumber: inputNumber.value,
//     enteredPassword: inputPassword.value,
//     enteredZipCode: inputZipCode.value,
//   };
//   if (edit_index === null) {
//     submittedData.push(formData);
//   } else {
//     submittedData.splice(edit_index, 1, formData);
//     edit_index = null;
//     btnSubmit.innerText = "Submit";
//   }

//   inputName.value = "";
//   inputAddress.value = "";
//   inputEmail.value = "";
//   inputPassword.value = "";
//   inputNumber.value = "";
//   inputZipCode.value = "";
//   displayData();
// });

// function displayData() {
//   let html = "";
//   submittedData.forEach(function (ele, index) {
//     html += `<tr id="table-data">
//      <td>${index + 1}</td>
//             <td id="table-name">${ele.enteredName}</td>
//             <td id="table-address">${ele.enteredAddress}</td>
//             <td id="table-number">${ele.enteredNumber}</td>
//             <td id="table-email">${ele.enteredEmail}</td>
//             <td id="table-password">${ele.enteredPassword}</td>
//             <td id="table-zip">${ele.enteredZipCode}</td>
//             <td>
//               <button class="btn btn-primary"onClick='editInfo(${index})'>Edit</button>
//               <button class="btn btn-danger"onClick='deleteInfo(${index})'>Danger</button>
//             </td>
//           </tr>`;
//   });
//   tableBody.innerHTML = html;
// }

// function editInfo(index) {
//   edit_index = index;
//   inputName.value = submittedData[index].enteredName;
//   inputAddress.value = submittedData[index].enteredAddress;
//   inputEmail.value = submittedData[index].enteredEmail;
//   inputNumber.value = submittedData[index].enteredNumber;
//   inputPassword.value = submittedData[index].enteredPassword;
//   inputZipCode.value = submittedData[index].enteredZipCode;
//   btnSubmit.innerText = "Update";
// }
// function deleteInfo(index) {
//   submittedData.splice(index, 1);
//   displayData();
// }
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

let submittedData = JSON.parse(localStorage.getItem("submittedData")) || [];
let edit_index = null;

if (submittedData.length > 0) {
  displayData();
}

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

  if (edit_index === null) {
    submittedData.push(formData);
  } else {
    submittedData.splice(edit_index, 1, formData);
    edit_index = null;
    btnSubmit.innerText = "Submit";
  }

  localStorage.setItem("submittedData", JSON.stringify(submittedData));

  inputName.value = "";
  inputAddress.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputNumber.value = "";
  inputZipCode.value = "";
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
              <button class="btn btn-primary" onClick='editInfo(${index})'>Edit</button>
              <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
            </td>
          </tr>`;
  });
  tableBody.innerHTML = html;
}

function editInfo(index) {
  edit_index = index;
  inputName.value = submittedData[index].enteredName;
  inputAddress.value = submittedData[index].enteredAddress;
  inputEmail.value = submittedData[index].enteredEmail;
  inputNumber.value = submittedData[index].enteredNumber;
  inputPassword.value = submittedData[index].enteredPassword;
  inputZipCode.value = submittedData[index].enteredZipCode;
  btnSubmit.innerText = "Update";
}

function deleteInfo(index) {
  submittedData.splice(index, 1);
  localStorage.setItem("submittedData", JSON.stringify(submittedData));
  displayData();
}
