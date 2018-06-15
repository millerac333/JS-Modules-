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