import { useState } from "react"

const useInputField=(defaultValue)=>
{
  const [fieldvalue,setfieldvalue]=useState(defaultValue);
  const handleOnChange=e=>
  {
    setfieldvalue(e.target.value)
  }
  return [fieldvalue,handleOnChange]

}
export default useInputField;