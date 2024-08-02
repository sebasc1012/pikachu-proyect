import { ChangeEvent, useState } from "react"

const SearchBar = () => {

 

const [valueInput, setValueInput] = useState('');


const handleInput = (event :ChangeEvent<HTMLInputElement>) => {
    
    setValueInput(event.target.value);
   
}

    
  return (
    <>
      <input type="text" placeholder="Search your character" name="Search" onChange={handleInput} value={valueInput}/>
    </>
  )
}

export default SearchBar
