
export const Characters = () => {

const getCharacter = async () => {
    const url =`https://pokeapi.co/api/v2/berry/1/` ;
    const respponse = await fetch(url);
    const data= await respponse.json();
    // console.log(data);

    const caracterData = data.map((item) => ({
        id : item.id, 
    }))

    return caracterData
}

  return (
    <>
      {/* <p>{getCharacter(data.name)}</p> */}
    </>
  )
}


