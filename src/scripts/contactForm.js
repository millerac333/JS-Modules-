const getContacts = require("./contactCollection");

collectContacts.saveDatabase();

const appendSection = document.querySelector("#output-form");
const fragment = document.createDocumentFragment();

const formInputCreator = (inputID, inputType, inputName) => {
    let newInputField = document.createElement("input");
    newInputField.setAttribute("class", "input-field")
    newInputField.id = inputID;
    newInputField.type = inputType;
    newInputField.name = inputName
        newInputField.placeholder = inputName;
    fragment.appendChild(newInputField);
    appendSection.appendChild(fragment);
}

const inputFirstName = newInputField("inputFirstName", "text", "First Name");
const inputLastName = newInputField("inputLastName", "text", "Last Name");
const inputPhoneNumber = newInputField("inputPhoneNumber", "text", "Phone Number");
const inputAddress = newInputField("inputAddress", "text", "Address");
const submitButton = newInputField("submitButton", "submit", "Submit");

