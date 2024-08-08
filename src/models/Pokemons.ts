export interface Pokemon {
    count:number;
    next:null;
    previous:null;
    results: Results[]
   }
  export  interface Results {
    name:string;
    url:string;
   }
   export interface PokemonResponseAPI {
    results:{
      name:string;
      url:string;
    }[];
   }
   export interface ReturnResult {
    name:string;
    id:string;
   }