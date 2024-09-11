let username:string = "Mark"
let age:number = 0
let isTeacher:boolean = true;

//Typehoz nem lehet hozzáadni
type Person = {
    name: string,
    age: number,
    isTeacher: boolean,
    isDepressed?: boolean,
    // ?: -> Not required
}

//interfacehez lehet
interface Schooler{
    name: string,
    age: number,
    isTeacher?: boolean
}

interface Schooler{
    //Vagy boolean vagy string
    driversLicense?: boolean | string
}

let tomi:Person = {
    name: "Tomás",
    age: 20,
    isTeacher: true
}

let tomi2:Schooler = {
    name: "Tomás",
    age: 20,
    isTeacher: true
}

type Cat = {
    name:string,
    age:number
}

type Dog = {
    name:string,
    age:number,
    hasCollar: boolean
}
// Interfaceel nem lehet ilyet
type Pet = Cat | Dog | "Gáza"

let Fish: Pet = "Gáza";

type schoolClass = "A" | "B" | "C" | "D"
