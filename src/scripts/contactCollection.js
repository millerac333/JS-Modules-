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