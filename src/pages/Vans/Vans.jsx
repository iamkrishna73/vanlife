import React, { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export const loader = () => {
  return getVans();
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img alt={van.name} src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [error, setError] = useState(null);
  // const vans = useLoaderData();
  // console.log(vans)

  // const typeFilter = searchParams.get("type");

  // const displayVan = typeFilter
  //   ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
  //   : vans;

  // const handleFilterChange = (key, value) => {
  //   setSearchParams((prevParams) => {
  //     if (value === null) {
  //       prevParams.delete(key);
  //     } else {
  //       prevParams.set(key, value);
  //     }
  //     return prevParams;
  //   });
  // };

  // const vanElements = displayVan.map((van) => (
  //   <Link
  //     to={van.id}
  //     state={{ search: `?${searchParams.toString()}` }}
  //     key={van.id}
  //     className="host-van-link-wrapper"
  //   >
  //     <div key={van.id} className="van-tile">
  //       <img alt={van.name} src={van.imageUrl} />
  //       <div className="van-info">
  //         <h3>{van.name}</h3>
  //         <p>
  //           ${van.price}
  //           <span>/day</span>
  //         </p>
  //       </div>
  //       <i className={`van-type ${van.type} selected`}>{van.type}</i>
  //     </div>
  //   </Link>
  // ));

  // if (error) {
  //   return <h1>There was an error: {error.message}</h1>;
  // }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
