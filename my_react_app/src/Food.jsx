
function Food() {
  const food1 = "Orange"
  const food2 = "Banana"
  return(
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      { <li>{food2.toUpperCase()}</li> /* we could also use js builtin function*/}
    </ul>
  )
}

export default Food