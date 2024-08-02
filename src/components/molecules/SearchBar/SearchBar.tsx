import { ChangeEventHandler } from "react";

 interface searchAllPokemon{
  value:string;
  onChange: ChangeEventHandler<HTMLInputElement>;
 }

export const SearchBar = ({ value, onChange }:searchAllPokemon) => {
  
  return (
      <input  
      type='text' 
      placeholder='Search your favorite Pokemon' 
      value={value} 
      onChange={onChange} 
      name='search' />
  )
}

