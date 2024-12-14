function merge(str1, str2) {
    let len = Math.max(str1.length, str2.length)
    let array =[];
    for (let i = 0; i < len; i++) {
        if (str1[i] !== undefined) {
            array.push(str1[i])
        }
        if (str2[i] !== undefined) {
            array.push(str2[i])
        }
        
    }
    return array.join("")
}
console.log(merge("abc", "xyz"));