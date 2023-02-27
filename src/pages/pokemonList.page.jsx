import { useState, useEffect } from "react";
import { searchByName, getListOf, searchByFilter} from "../helpers/pokemon.helpers";
import { Link } from "react-router-dom";

export function PokemonList(props) {


    let [items, setItems] = useState([]);
    let [searchName, setSearchName] = useState("");
    let [searchType, setSearchType] = useState("");
    let [searchWeakness, setSearchWeakness] = useState("");

    function getPokemon() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((res) => res.json())
        .then((data) => { 
            console.log(data)
            setItems(data.pokemon);
        })
        .catch((err) => console.error(err))
       
    }

    
    useEffect(()=> {
        getPokemon();
    },[])

   
    

    let pokemonByName = searchByName(searchName, items);
    let pokemonByType  = getListOf(items, "type");
    let pokemonByWeakness = getListOf(items, "weaknesses");
    let pokemonByFilter = searchByFilter(items,searchType,searchWeakness);
    let pokemonDisplay;

    if(searchType != "" || searchWeakness != "") {
        pokemonDisplay = pokemonByFilter;
    } else {
        pokemonDisplay = pokemonByName;
    }

 
    
    return (

        <div>
            <form>
                <div>
                     <label htmlFor="searchName">Search By Name</label>
                     <input 
                        name="searchName" 
                        id="searchName" 
                        value={searchName} 
                        onChange={(e) => setSearchName(e.target.value)} >
                     </input>
                     <label htmlFor="searchType">Filter By Type</label>
                     <select 
                        name="searchType" 
                        id="searchType" 
                        value={searchType} 
                        onChange={(e) => setSearchType(e.target.value)} >
                            <option value="">All</option>
                             {pokemonByType.map((type) => <option value={type}>{type}</option>)}
                             
                     </select>
                     <label htmlFor="searchWeakness">Filter By Weakness</label>
                     <select 
                        name="searchWeakness" 
                        id="searchWeakness" 
                        value={searchWeakness} 
                        onChange={(e) => setSearchWeakness(e.target.value)} >
                            <option value="">All</option>
                             {pokemonByWeakness.map((type) => <option value={type}>{type}</option>)}
                             
                     </select>
                </div>
            </form>

            <ul>
                {pokemonDisplay.map((item) => {
                    return (
                        <li key={item.name}>
                            <Link to={`${item.name}`}>{`Name: ${item.name}, Number: ${item.num}, Type: ${item.type}, Weakness: ${item.weaknesses}`}</Link>
                        
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

