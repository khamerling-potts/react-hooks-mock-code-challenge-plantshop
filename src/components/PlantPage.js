import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => setAllPlants(plants));
  }, []);

  function handleAddPlant(plant) {
    setAllPlants([...allPlants, plant]);
  }

  function handleSearchFilter(value) {
    setSearchTerm(value);
  }

  const plantsToDisplay = allPlants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearchFilter} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
