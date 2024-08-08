

interface pokemonFightProps {
    imgUrl: string;
    name: string | undefined;
}

 export const PokemonFight= ({ imgUrl , name}: pokemonFightProps ) => {
  return (
    <>
        <img src={imgUrl} alt={name}/>
        <p>{name}</p>
    </>
  )
}

