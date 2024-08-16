import { urlDefault } from "../../../Constant";
import { useFetch } from "../../../hooks/useFetch";
import { ReturnResult } from "../../../models/Pokemons";
import { ResponsePokemon } from "../../../models/ResponsePokemon";
import style from "../PopapPokemons/PopapPokemons.module.scss";

interface Props {
  pokemon: ReturnResult;
  setShowPopup: () => void;
}

export const PopapPokemons = ({ pokemon, setShowPopup }: Props) => {
  const { data, isLoading } = useFetch<ResponsePokemon>(
    `${urlDefault}${pokemon.id}`
  );

  if (isLoading) return <p>....Loading</p>;

  return (
    <section className={style.containerPopap}>
      <button className={style.closeButton} onClick={setShowPopup}>
        X
      </button>
      <div className={style.pokeballContainer}>
        <img
          role="imagePokemon"
          alt="pokeball"
          src="public/img/Pokeball.png"
        />
      </div>

      <div className={style.heightExperience}>
        <ul>
          Height:
          <li role="hightPokemon">{data?.height}</li>
        </ul>
        <ul>
          Experience:
          <li>{data?.base_experience}</li>
        </ul>
      </div>

      <div className={style.containerImagesInfo}>
        <div className={style.abilitiesMoves}>
          <ul className={style.abilities}>
            Abilities:
            <li >{data?.abilities.map((i) => i.ability.name)}</li>
          </ul>

          <ul className={style.abilities}>
            Moves:
            <li>{data?.moves.map((e) => e.move.name).filter((pokemon, index) => index < 3)}</li>
          </ul>
        </div>

        <div className={style.imgContainer}>
          <img
            className={style.imagePokemon}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
          />
          <h4 role="namePokemon">{pokemon.name}</h4>
        </div>
      </div>
    </section>
  );
};
