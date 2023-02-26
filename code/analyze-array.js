
function analyzeArray(arr) {

    let obj = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }

    obj.average = arr.map(x => x).reduce((a, b) => {return a + b}) / arr.length

    obj.min = Math.min(...arr)

    obj.max = Math.max(...arr)

    obj.length = arr.length;

    return obj
}

module.exports = analyzeArray