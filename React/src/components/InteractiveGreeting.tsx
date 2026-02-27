import { useState } from 'react';

export default function InteractiveGreeting() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    return <div>
        <input type="text" placeholder="First Name" id="firstNameButton" onChange={(event) => setFirstName(event.target.value)}></input>
        <input type="text" placeholder="Last Name" id="lastNameButton" onChange={(event) => setLastName(event.target.value)}></input>
        <input type="number" placeholder="Age" id="ageButton" onChange={(event) => setAge(event.target.value)}></input>
        <input type="submit" value="Update Greeting" onClick={() => {
            setFirstName((document.getElementById("firstNameButton") as HTMLInputElement).value);
            setLastName((document.getElementById("lastNameButton") as HTMLInputElement).value);
            setAge((document.getElementById("ageButton") as HTMLInputElement).value);
            setLocation((document.getElementById("locationButton") as HTMLInputElement).value);
        }}></input>
        <input type="string" placeholder="Location" id="locationButton" onChange={(event) => setLocation(event.target.value)}></input>
        <p id="InteractiveGreetingParagraph" style={{backgroundColor:  parseInt(age) < 18 ? "red" : "green"}}>
            Your name is {firstName}, 
            you are {parseInt(age) < 0 ? "INVALID AGE" : parseInt(age) < 18 ? "NOT" : ""} old enough to vote
            Your train fare is: {calculateTrainFare(location, parseInt(age))}
        </p>
    </div>
    
}

function calculateTrainFare(location: string, age: number) {
    const [trainFare, setTrainFare] = useState(0.00);
    {location == "Winchester" ? setTrainFare(3) : setTrainFare(trainFare)}
    {location == "Sailsbury" ? setTrainFare(5) : setTrainFare(trainFare)}
    {location == "London" ? setTrainFare(15) : setTrainFare(trainFare)}
    if (age < 18) {
        setTrainFare(age/2)
    }
    return trainFare;
}
