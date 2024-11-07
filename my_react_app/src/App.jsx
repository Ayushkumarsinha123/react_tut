import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
function App() {
 
  return ( /// if we dont use <>&</> then error is appear because return statement only capable of returning only 1 component that why we have to wrap the components
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
  )
}

export default App
