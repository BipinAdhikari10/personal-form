let submitForm = document.getElementById("submit-form");
let inputName = document.getElementById("fname");
let inputMiddleName = document.getElementById("mname");
let inputLastName = document.getElementById("lname");
let inputEmail = document.getElementById("email");
let inputContact = document.getElementById("contact");
let inputAge = document.getElementById("age");
let selectInputGender = document.getElementById("gender");
let buttonSubmit = document.getElementById("submit");
let buttonReset = document.getElementById("reset");
let tableBody = document.getElementById("table-body");

tableBody.innerHTML = "";
let submittedData = [];

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = {
    enteredName: inputName.value,
    enteredMiddleName: inputMiddleName.value,
    enteredLastName: inputLastName.value,
    enteredEmail: inputEmail.value,
    enteredContact: inputContact.value,
    enteredAge: inputAge.value,
    enteredSelectGender: selectInputGender.value,
  };

  submittedData.push(formData);

  // Call displayData before resetting the form
  displayData();

  // Reset the form after data is displayed
});

buttonReset.addEventListener("click", (event) => {
  event.preventDefault();
  resetForm();
});

function resetForm() {
  inputName.value = "";
  inputMiddleName.value = "";
  inputLastName.value = "";
  inputEmail.value = "";
  inputContact.value = "";
  inputAge.value = "";

  // Reset selectInputGender to the first option
  selectInputGender.selectedIndex = 0;
}

function displayData() {
  let html = "";
  submittedData.forEach(function (ele, index) {
    html += `   <tr>
            <td>${index + 1}</td>
            <td>${ele.enteredName}</td>
            <td>${ele.enteredMiddleName}</td>
            <td>${ele.enteredLastName}</td>
            <td>${ele.enteredEmail}</td>
            <td>${ele.enteredAge}</td>
            <td>${ele.enteredSelectGender}</td>
          </tr>`;
  });
  tableBody.innerHTML = html;
}
