(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const createContact = require("./contact.js")

const currentContacts = (
    createContact("Kareem", "Abdul-Jabbar", "123-005-7446", "001 Points Leader Way", ""),
    createContact("Karl", "Malone", "123-005-4852", "2 Mail Man Lane", ""),
    createContact("Michael", "Jordan", "123-004-3454", "23 Air Road", "" )
)

console.log(currentContacts);

modules.exports(currentContacts)
},{"./contact.js":3}],2:[function(require,module,exports){

const DomBuilder = (what, where) => {
    document.querySelector(where).appendChild(what)
  }

  module.exports = DomBuilder
},{}],3:[function(require,module,exports){
(function (global){
global.counter = 0


//--- uses Object.create to write new contact prototype with defined keys underneath//
let newContact = Object.create(null, {
    First_Name: {
        value: "",
        enumerable: true,
        writable: true
    },
    Last_Name: {
        value: "",
        enumerable: true,
        writable: true
    },
    Phone_Number: {
        value: "",
        enumerable: true,
        writable: true
    },
    Address: {
        value: "",
        enumerable: true,
        writable: true
    },
    ID_Number: {
        value: global.counter++,
        enumerable: true
    }
})

//--- creates array object for contacts//
let contactList = [];

const createContact = (fName, lName, pNumber, Addr, IDcounter) => {
    const person = Object.create(newContact)

    person.First_Name = fName
    person.Last_Name = lName
    person.Phone_Number = pNumber
    person.Address = Addr
    person.ID_Number = IDcounter
    contactList.push(person)
}

console.log(contactList);

module.exports=createContact


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
let localStorageFunctions = Object.create({}, {
    saveDatabase: {
        value: function (databaseObject, localStorageKey) {
            const stringData = JSON.stringify(databaseObject)
            localStorage.setItem(localStorageKey, stringData)
        }
    },
    loadDatabase: {
        value: function (localStorageKey) {
            const dataString = localStorage.getItem(localStorageKey)
            return JSON.parse(dataString)
        }
    }
}
)

console.log(localStorageFunctions);

module.exports = localStorageFunctions
},{}],5:[function(require,module,exports){
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


},{"./contactCollection":4}],6:[function(require,module,exports){
const contact = require("./contact.js")
const localStorage = require("./contactCollection.js")

let contactList = localStorage.loadDatabase(contactList)
console.log(contactList);

let contactListArticle = document.getElementById("#output-list");

const contactFragment = document.createDocumentFragment()

let addContactToDOM = () => {
    contactList.forEach(item => {
        const contactDiv = document.createElement("div");
        for (i in item) {
            let contactDetailElement= document.createElement("p")
            contactDetailElement.textContent = item[i]
            contactFragment.appendChild(contactDetailElement)
        }
        contactListArticle.appendChild(contactFragment)
    })
}
module.exports = addContactToDOM
},{"./contact.js":3,"./contactCollection.js":4}],7:[function(require,module,exports){

},{}]},{},[3,4,5,6,1,2,7]);
