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
//--- creates a generator function to assign new ID numbers to contacts and created contacts.//
// const idGenerator = function* (startFrom = 0) {
//     let newID = 1
//     while (true) {
//         yield startFrom + newID
//         newID++

//     }
// }

// function idGenerator(initialID) {
//     this.nextId = initialID || 1;
// }

global.counter = 0
//--- calls and assigns new variable name to ID generator function


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

},{}],6:[function(require,module,exports){
const contact = require("./contact.js")
const localStorage = require("./contactCollection.js")

let contactList = localStorage.loadDatabase(contactList)
console.log(contactList);

let contactListArticle = document.getElementById("output");

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
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}]},{},[3,4,5,6,1,2,7]);
