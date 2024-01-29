import { useState } from 'react';

const CustomHooks = (intval, initError) => {
    const [inp, setInput] = useState(intval);
    const [errors, setError] = useState(initError);
    // handle change function
    const handleChange = (e) => {
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        console.log("handlechanges", inp);
        // error msg
        if (e.target.classname === "required") {
            console.log("called inside if ", e.target.value);
            if (e.target.value === "") {
                let SpanId = [e.target.name] + "Error";
                console.log("spanid", SpanId);
                setError({ ...errors, [SpanId]: "this field is required" })
            } else {
                console.log("inside else condition");
                setError({ ...errors, "username error": "" })
            }
        }
    }
    const updateData=(data)=>{
        setInput(data)
    }
 
    return {handleChange, inp, errors,updateData,}  
};

export default CustomHooks;