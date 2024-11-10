

function Button() {
  
    const imageURL = './Click_event/src/assets/profile.jpg'

    const eventHandler = (e) => {
      e.target.display = "none";

      return(
        <img onClick= {(e) => eventHandler(e)} src={imageURL}></img>
      )
    } 
}

export default Button 