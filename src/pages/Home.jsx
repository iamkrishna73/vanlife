import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home-container'>
      <h1>You got to travel plans, we got the travel vans.</h1>
      <p>
        add adventure to your life by joining the #VanLife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to='vans'>Find your van</Link>
    </div>
  );
};

export default Home;
