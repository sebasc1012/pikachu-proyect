import { ChangeEventHandler } from "react";
import style from './SearchBar.module.scss'

interface SearchAllPokemon {
  value: string;
  placeholder:string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ value, onChange, placeholder }: SearchAllPokemon) => {
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
