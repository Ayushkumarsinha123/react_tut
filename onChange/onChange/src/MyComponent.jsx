import React, {useState} from 'react';

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState();
  const [payment, setpayment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleQuantity(event) {
    setQuantity(event.target.value)
  }
  function handleComment(event) {
    setComment(event.target.value)
  }
  function handlePayment(event) {
    setpayment(event.target.value)
  }
  

  return(
    <>
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantity} type='number'></input>
      <p>Name: {quantity}</p>
      <textarea value={comment} onChange={handleComment} placeholder='information'></textarea>
      <p>instruction: {comment}</p>
      <select value={payment} onChange={handlePayment}>
        <option>select an option</option>
      <option>visa</option>
      <option>mastercard</option>
      <option>giftcard</option>
      </select>
      <p>payment method : {payment}</p>
    </div>
    </>
  )
}
export default MyComponent
