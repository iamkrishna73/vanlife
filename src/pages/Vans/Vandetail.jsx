import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVans] = useState(null);
  ///console.log(id);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [id]);

  return (
    <div className='van-detail-container'>
        <Link to=".." relative="path" end className="back-button">
             &larr; <span>Back to all vans</span>
        </Link>

      {van ? (
        <div className='van-detail'>
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
