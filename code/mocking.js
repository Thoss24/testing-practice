function forEachFunc(items, callback) { // we can test this function using a mock function, and inspect the mock's state to ensure the callback in invoked as expected
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

module.exports = forEachFunc