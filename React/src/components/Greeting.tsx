interface GreetingProps {
    firstname: String,
    lastname: String,
    age: number,
    colour : string
}
export default function Greeting({firstname, lastname, age, colour}: GreetingProps) {
    return <h1 style={{color: colour}}>Hello {firstname} {lastname}, your age is {age}. Therefore you are {age < 18 ? <p>a child</p>: <p>not a child</p>}</h1>
}