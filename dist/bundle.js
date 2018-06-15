(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const DomBuilder = (what, where) => {
    document.querySelector(where).appendChild(what)
  }

  module.exports = DomBuilder
},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
//--- creates a generator function to assign new ID numbers to contacts and created contacts.//
const idGenerator = function* (startFrom = 0) {
    let newID = 1
    while (true) {
        yield startFrom + newID
        newID++
    }
}

//--- calls and assigns new variable name to ID generator function
const contactIDmaker = idGenerator()

//--- uses Object.create to write new contact prototype with defined keys underneath//
let newContact = Object.create(null, {
    firstName: {
        value: "",
        enumerable: true,
        writable: true
    },
    lastName: {
        value: "",
        enumerable: true,
        writable: true
    },
    phone_number: {
        value: "",
        enumerable: true,
        writable: true
    },
    address: {
        value: "",
        enumerable: true,
        writable: true
    },
    IDnumber: {
        value: contactIDmaker.next().value
    }
})
//--- creates array object for contacts//
let contactList = [];

const createContact = (fName, lName, pNumber, Addr, IDnum ) => {
    const person = Object.create(newContact)

    person.firstName = fName
    person.lastName = lName
    person.phone_number = pNumber
    person.Addr = address
    person.IDnum = IDnumber
    contactList.push(person)
}
},{}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],5:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],6:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}]},{},[2,3,4,5,1,6]);
