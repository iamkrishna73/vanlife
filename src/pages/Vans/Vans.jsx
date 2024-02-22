import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const typeFilter = searchParams.get("type");

  const displayVan = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const handleFilterChange = (key, value) => {
    setSearchParams(prevParams => {
      if(value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    })
  }

  const vanElements = displayVan.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div key={van.id} className="van-tile">
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected": ""}`}>
          
          Simple
        </button>
        <button      onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged"? "selected": ""}`}>
          Rugged
        </button>
         <button onClick={() => handleFilterChange("type", "luxury")}  className={`van-type luxury ${typeFilter === "luxury"? "selected": ""}`}> 
          Luxury
        </button> 
       { typeFilter ? <button  onClick={() => handleFilterChange("type", null)}  className="van-type clear-filters">
          Clear filter
        </button> : null }
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
