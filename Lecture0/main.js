// const o = {
//     a: 'a',
//     b: 'b',
//     obj: {
//         key: 'key'
//     }
// }

// const o2 = Object.assign({}, o)

// o2.a = 'New Value'

// console.log(o2.a)
// console.log(o.a)


function deepCopy(obj){
    const keys = Object.keys(obj)
    const newObject = {}
    for (let i = 0; i < keys.length; i++){
        key = keys[i]
        if (typeof obj[key] === 'object'){
            newObject[key] = deepCopy(obj[key])
        }else{
            newObject[key] = obj[key]
        }
    }
    return Object.assign({}, obj)
}