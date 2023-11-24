let students = [`radmir `, `shaxboz`, `jaxongir`, `xasan`, `daler`]

let even_names = []
let odd_names = []

students.map((d , c) => {
    if (ind % 2 === 0) {
        even_names.push(d)
    } else {
        odd_names.push(d)
    }
}

)

console.log(even_names);
console.log(odd_names);