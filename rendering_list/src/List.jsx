

function List() {
  const fruits = [{id:1,Name:"apple",calories: 95},
     {id:2,Name:"orange", calories: 100},
      {id:3,Name:"banana", calories: 98},
       {id:4,Name:"coconut", calories: 80}];
  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.Name}: &nbsp;<b>{fruit.calories}</b></li>);

  return(<ul>{listItems}</ul>)
}

export default List