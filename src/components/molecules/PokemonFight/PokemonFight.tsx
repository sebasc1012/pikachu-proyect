interface pokemonFightProps {
  imgUrl: string;
  name: string | undefined;
  className: string;
  experience:number | undefined;
}

export const PokemonFight = ({
  imgUrl,
  name,
  className,
  experience
}: pokemonFightProps) => {
  return (
    <div className={className}>
      <h5>{experience}</h5>
      <p>{name}</p>
      <img src={imgUrl} alt={name} />
    </div>
  );
};
