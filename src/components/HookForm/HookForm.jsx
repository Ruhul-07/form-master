import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // const name = useInputState('Rojoni Active')
    const emailState = useInputState('Rojoni Active')
 
    const handleSubmit = e =>{
        console.log(emailState.value)
        e.preventDefault();
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            {/* <input onChange={handleNameChange} value={name} type="text" name="name" /> */}
            <br />
            <input {...emailState} type="email" id="" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default HookForm;