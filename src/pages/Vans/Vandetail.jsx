import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVans] = useState(null);
  const location = useLocation();
  console.log(location);
  ///console.log(id);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [id]);

  const search = location.state?.search || "";
  //const search = location.state && location.state.search || "";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" end className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
