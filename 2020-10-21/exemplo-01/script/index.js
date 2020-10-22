function validation() {
    let nome = document.getElementById("name");
    let email = document.getElementById("email");
    let date = document.getElementById("datanasc");
    
    if (!nome.checkValidity() || nome.value == "") {
      nome.style.border = '1px solid #FF0000';
      let errorNameText = document.querySelector("#errorName");
      errorNameText.style.color = '#FF0000';
      errorNameText.innerHTML = nome.validationMessage;
    }
    if (!email.checkValidity() || email.value == "") {
      email.style.border = '1px solid #FF0000';
      document.querySelector('#errorEmail').innerHTML = email.validationMessage;
      let errorNameEmail = document.querySelector("#errorEmail");
      errorNameEmail.style.color = '#FF0000';
      errorNameEmail.innerHTML = email.validationMessage;
    }
    if (!date.checkValidity() || date.value == "") {
      date.style.border = '1px solid #FF0000';
      document.querySelector('#errorDate').innerHTML = date.validationMessage;
      let errorNameDate = document.querySelector("#errorDate");
      errorNameDate.style.color = '#FF0000';
      errorNameDate.innerHTML = date.validationMessage;
    }
}