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