

function List(props) {

  const category = props.category;
  
  const itemsList = props.items;
 
  const listItems = itemsList.map(items => <li key={items.id}>{items.Name}: &nbsp;<b>{items.calories}</b></li>);

  return(
    <>
    <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>
    
    </>
  )
}

export default List