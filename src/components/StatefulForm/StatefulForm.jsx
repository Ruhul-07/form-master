import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState("name")
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError("Password must be 8 chareacter")
        }
        else{
            setError('')
            console.log(name, email, password)   
        }  
    }
    const handleNameChanged = e => {
        setName(e.target.value)
    }
    const handleEmailChanged = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChanged = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChanged} type="text" name="name" />
                <br />
                <input onChange={handleEmailChanged} type="email" name="email" id="" required/>
                <br />
                <input onChange={handlePasswordChanged} type="password" name="phone" />
                <br />
                <input type="submit" value="Submit" />
                {
                error && <p>{error}</p>
                }
            </form>
            
        </div>
    );
};

export default StatefulForm;