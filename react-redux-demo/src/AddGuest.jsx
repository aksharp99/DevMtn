import React, {Component} from 'react';

class AddGuest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newGuest: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddGuest = this.handleAddGuest.bind(this)
  }

  handleChange(e) { //responsible for update state with input text changes.
    this.setState({
      newGuest: e.target.value
    })
  }

  handleAddGuest() { //responsible for notifying parent component that we have a new guest.
    this.props.addGuest(this.state.newGuest);
    this.setState({
      newGuest: ''
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.newGuest}
          onChange={this.handleChange}/>
          <button
            onClick={this.handleAddGuest}
            >AddGuest
          </button>
      </div>
    )
  }
}

export default AddGuest
