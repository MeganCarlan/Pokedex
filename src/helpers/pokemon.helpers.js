import { useState, useEffect } from "react";

export function searchByName(name, list) {

    //take in name and list
    //display filtered array based on name

    if(name!="") {
     return list.filter((item) => item.name == name);
    } else {
        return list;
    }

}




export function getListOf(list, prop) {

   console.log(list);
   
    let types = [];
    for (let i=0; i<list.length; ++i) // loop through every object
    {
        // array of strings
        const newTypes = list[i][prop];

        // console.log(newTypes);

        // loop through array of strings
        for (let newTypeIndex=0; newTypeIndex<newTypes.length; ++newTypeIndex)
        {
            const newType = newTypes[newTypeIndex];
            // console.log("newType is " + newType);
            types = [...types, newType];
        }
    }

    
    // Alphabetical
    types.sort();
    // Get rid of duplicates
    const uniqueTypes = [...new Set(types)];

    console.log(uniqueTypes);

    return uniqueTypes;

    
}


export function searchByFilter(list,type,weakness) {
    //take array of pokemon
    //filter the array by filter settings

   let newList = [];
    for (let item of list) {
        if (item.type.includes(type) || type == "") {
            newList = [...newList,item];
        }
    }
    let finalList = [];
    for (let item of newList) {
        if(item.weaknesses.includes(weakness) || weakness == "") {
            finalList = [...finalList, item];
        }
    }
    
return finalList;
    



}

export async function GetOnePokemon() {


   
    let [info, setInfo] = useState({});

   fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
    .then((res) => res.json())
    .then((data) => { 
        console.log(data)
        setInfo(data);
    
    })
    .catch((err) => console.error(err));

    return await info;





}














