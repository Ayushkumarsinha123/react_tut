import React,{useState} from "react";

function MyCompo(){
  const [car, setCar] = useState([]);
  const [ carYear, setCarYear ] = useState(new Date().getFullYear());
  const [ carMake, setCarMake ] = useState("");
  const [ carModel, setCarModel] = useState("");

  function handleAddCar() {
      const newCar = {year: carYear,
                      make: carMake,
                      model: carModel};

      setCar(c => [...c, new car]);
  }

  function handleRemoveCar(index) {
      setCar(c => c.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
      setCarYear(event.target.value);
  }
   
  function handleMakeChange(event) {
      setCarMake(event.target.value);
  }

  function handleModalChange(event){
      setCarModel(event.target.value)
  }

  return (<>
  <div>
    <h2>List of car Objects</h2>
    <ul>
      {car.map((car, index) => 
      <li key={index}>
        {car.year} {car.make} {car.model} 

      </li>
      )}
    </ul>
    <input type="number" value={carYear} onChange={handleYearChange} />
    <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/>
    <input type="text" value={carModel} onChange={handleModalChange} placeholder="Enter car model"/>
    <button onClick={handleAddCar}>Add car</button>
  </div>  
  </>)
}

export default MyCompo;