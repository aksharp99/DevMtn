import React from 'react';

// class GuestList extends {
//   render() {
//     return (
//       <div>
//         Guest List!
//       </div>
//     )
//   }
// }
// code above is the same thing as below code


function GuestList(props) {
  //props.guest //['batman','superman'];
const guests = props.guests.map((guest, i) => {
  return <li key={i}>{guest}</li>
})


  return (
    <div>
      <ul>
        {guests}
      </ul>
    </div>
  )
}

export default GuestList
