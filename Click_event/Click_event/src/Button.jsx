

function Button() {
  

    const eventClick = () => console.log("stop clicking me");
    const eventClick2 = (name) => console.log(`${name}stop clicking me`);


    return(
     
  <button onClick={() => eventClick2("ayush ")}>click me</button> )
}

export default Button 