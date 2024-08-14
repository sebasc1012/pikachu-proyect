interface PokemonFightProps {
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
}: PokemonFightProps) => {
  return (
    <div className={className}>
      <h5>{experience}</h5>
      <p>{name}</p>
      <img src={imgUrl} alt={name} />
    </div>
  );
};
