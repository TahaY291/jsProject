let array = [
    3,
    7,
    8,
    [7, 9, 98, 67, [4, 0, 7, [7, 0, 8, 67]]],
    [8, 6, 4, 2, 0, [6, 0, 8, 7, [87], [78, 98], [67, 98, [8, 7]]]]
]
function func(value) {
    let result = [];
    if(Array.isArray(value)) {
        value.forEach(item => {
            if(Array.isArray(item)) {
                result.push(...func(item))
            } else{
                result.push(item)
            }
        })
    } else{
        result.push(value)
    }
    return result;
}
console.log(func(array));



let revrs = func(array)
console.log(revrs)


function rev(value) {
    let output = [];
    for (let i = value.length - 1; i >= 0; i--) {
       output.push(value[i])
    }
    return output
}
console.log(rev(revrs)); 

