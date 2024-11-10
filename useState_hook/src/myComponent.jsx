import React, {useState} from 'react';

function Mycomponent() {
    const [name, setName] = useState('guest');
    const [age, setAge] = useState(0);
    updateName = () => {
      setName("ayush")
    }

    updateAge = () => {
      setAge(age + 1) 
    }
    return(
      <>
      <div>
        <p>NAME:{name}</p>
        <button onClick={updateName}>set name</button>
      </div>

      <div>
        <p>AGE:{age}</p>
        <button onClick={updateAge}>set age</button>
      </div>
      </>
    )
}

export default Mycomponent
