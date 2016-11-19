import React from 'react';
import {connect} from 'react-redux';

import {addGuest} from './redux/party.js';
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

function mapStateToProps(state) {
  return {
    guests: state.party.guests
  }
}


export default connect(mapStateToProps)(GuestList)
