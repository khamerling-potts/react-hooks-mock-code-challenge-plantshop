import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    };
    fetch(`http://localhost:6001/plants`, configObj)
      .then((res) => res.json())
      .then((plant) => onAddPlant(plant));
  }

  function handleInputChange(e) {
    const value = e.target.value;
    const key = e.target.name;
    setNewPlant({ ...newPlant, [key]: value });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
