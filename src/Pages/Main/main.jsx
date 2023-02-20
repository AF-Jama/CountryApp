import React,{useState} from "react";
import Header from "../../Components/Header";
import CountryCard from "../../Components/CountryCard";
import useFetch from "../../customHooks/useFetch";
import './main.css';

const Main = ()=>{
    const [countryName,setCountryName] = useState(''); // set countryName state
    const { data,error,loading  } = useFetch(countryName===""?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/name/${countryName}`); // useFetch hook which runs on mount and dependency array change

    // console.log(data)

    return (
        <div id="main-page-container">
            <Header/>

            <main>
                <div id="inner-main-container">
                    <div id="form-container">
                        <input id="country-input" type="text" placeholder="Search for a country" onChange={(event)=>setCountryName(event.target.value)}/>
                    </div>

                    <div id="country-card-container">
                        {data?data.map(country=><CountryCard image={country.flags.svg} countryName={country.name.common} population={country.population.toLocaleString()} continent={country.region} capital={country.capital}/>):""}
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Main;