// props = read only properties that are shared between components.
// A parent component can sent date to a child component.
//  <component key=value />

import Student from './Student.jsx'

function App() {
  

  return (
   <>
   <Student Name="ayush" age = {20} isStudent={true}></Student>
   <Student Name="alok" age = {3000} isStudent={false}></Student>
   <Student Name="ashish" age = {20} isStudent={true}></Student>
   <Student></Student>
   </>
   
  )
}

export default App
