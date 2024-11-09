import List from './List.jsx'

function App() {
  

  const fruits = [{id:1,Name:"apple",calories: 95},
                  {id:2,Name:"orange", calories: 100},
                  {id:3,Name:"banana", calories: 98},
                  {id:4,Name:"coconut", calories: 80}];

  const vegis = [{id:1,Name:"potato",calories: 85},
                  {id:2,Name:"tomato", calories: 60},
                  {id:3,Name:"onion", calories: 78},
                  {id:4,Name:"ladyfinger", calories: 88}];

    
    
    
  return( <>
    <List items={fruits} category="fruits"></List>
    <List items={vegis} category="vegis"></List>
  </>
  )
}

export default App
