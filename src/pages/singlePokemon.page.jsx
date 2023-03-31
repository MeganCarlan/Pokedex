
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GetOnePokemon } from "../helpers/pokemon.helpers";
import { useState } from "react";

export function SinglePokemonPage(props) {

   
   
    let params = useParams();

    async function onLoad() {
        let data = await GetOnePokemon();
       

        for (let item of data) {
            if(item.name == params.name) {
               let pokemon = await item;
               
            }
        }
    }


   
    useEffect(()=> {
        onLoad();
    },[])
    
    console.log(params);

    return (
     <div>
        <h1>{params.name}</h1>
        <p>In progress...</p>
       
     </div>
    
        


    )


}