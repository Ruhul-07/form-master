import { useState } from "react"

const useInputState = (defauleValue = null) => {
    const [value, setValue] = useState(defauleValue);

    const onChange = e => {
        setValue(e.target.value);
    }
    // const handleChange = e => {
    //     setValue(e.target.value);
    // }

    // return [value, handleChange]
    return {
        value,
        onChange
    }
}

export default useInputState;