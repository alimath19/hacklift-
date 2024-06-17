const str = "My Teacher"
let revstr = ""
for (let len = str.length-1; len >=0; len--){
    console.log(len)
    revstr = `${revstr}${str[len]}`
    console.log(revstr)
}
console.log(revstr)