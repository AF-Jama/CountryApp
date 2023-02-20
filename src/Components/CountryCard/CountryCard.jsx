import React,{useState,useEffect} from "react";
import './CountryCard.css';


const CountryCard = (props)=>{



    return (
        <div id="country-card" className="card">
            <img src={props.image} alt="" id="country-image" />

            <div id="country-details">
                <h3>{props.countryName}</h3>

                <p>Population:- {props.population}</p>
                <p>Region:- {props.continent}</p>
                <p>Capital:- {props.capital}</p>
            </div>
        </div>
    )
}


export default CountryCard;