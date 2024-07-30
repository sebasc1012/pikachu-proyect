import React, { useEffect, useState } from 'react'


export const useFetch = (url) => {

  const [state,setState]= useState({
    data:null,
    isLoading:true,
    hasError:false,
    error:null
  })


  useEffect(()=>{

        getPokemons()

  },[url])


// se crea la funcion para que vuelba a cargar si se realiza una peticion a una url distinta//
const setLoadingState =()=>{
    setState({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
      })

}
 
  const getPokemons = async ()=> {

    setLoadingState()
    
    const response = await fetch(url)

    // si tenemos un error //
    if(!response.ok) {
        setState({
            data:null,
            isLoading:false,
            hasError:true,
            error:{
                code:response.status,
                message:response.statusText
            }
        })
        return;
    }

    const data = await response.json()

    //si Todo esta en Orden//

    setState({
        data:data,
        isLoading:false,
        hasError:false,
        error:null
    })
  }


    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError

    }
}


