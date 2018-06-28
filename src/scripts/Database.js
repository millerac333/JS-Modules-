const createContact = require("./contact.js")

const currentContacts = (
    createContact("Kareem", "Abdul-Jabbar", "123-005-7446", "001 Points Leader Way", ""),
    createContact("Karl", "Malone", "123-005-4852", "2 Mail Man Lane", ""),
    createContact("Michael", "Jordan", "123-004-3454", "23 Air Road", "" )
)

console.log(currentContacts);

modules.exports(currentContacts)