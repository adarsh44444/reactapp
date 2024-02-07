import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";

const App = () => {
  const [tours,setTours]=useState(data);
  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTours(newTour);

  }
  return(
    <div>
      <h2>Plan with Love</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
