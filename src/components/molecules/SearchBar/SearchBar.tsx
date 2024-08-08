import { ChangeEventHandler } from "react";
import style from './SearchBar.module.scss'

interface searchAllPokemon {
  value: string;
  placeholder:string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ value, onChange, placeholder }: searchAllPokemon) => {
  return (
    <input
     className={style.inputStyle}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name="search"
    />
  );
};
