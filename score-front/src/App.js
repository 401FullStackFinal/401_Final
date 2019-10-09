import React from 'react';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      petsObject: {
        Khali: {name: 'Baby Khaleesi', favorite_toy: 'dumbells'},
        Ginger: {name: 'Ginger', favorite_toy: 'bananas' },
        Khal: {name: 'Khal Basil', favorite_toy: 'anything' },
        Rosie: {name: 'Rosie', favorite_toy: 'ball' },
        Demi: {name: 'Demi Dog', favorite_toy: 'rope' },
        newName: {name: '', favorite_toy: ''}
      },
      // toys: [],
      // name: '',
      // favoriteToy: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/toys')
    .then(response => response.json())
    .then(body => this.setState({ previousObject: body }));
  }

  handleDelete  = (event, _id) => {
    event.preventDefault();
    fetch('http://localhost:8080/toys/:id', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    }).then(response => response.json())
      .then(body => this.setState({ petsObject: body }));
  }

  handleAdd = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.petsObject.name, favorite_toy: this.state.petsObject.favorite_toy }),
    }).then(response => response.json())
      .then(body => this.setState((previousState) => {
        return { pets: {...previousState.pets, body}}
      }));
  }

  handleChange = event => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
  }

  render() {
    return (

      <div className="App">

        <h1>Favorite Toys</h1>
        <ul>
          

              <li key={this.state._id} >

               <p> {this.state.petsObject.Khali.name} | {this.state.petsObject.Khali.favorite_toy}</p> 
               <p> {this.state.petsObject.Ginger.name} | {this.state.petsObject.Ginger.favorite_toy} </p>
               <p> {this.state.petsObject.Khal.name} | {this.state.petsObject.Khal.favorite_toy}</p>
               <p> {this.state.petsObject.Rosie.name} | {this.state.petsObject.Rosie.favorite_toy}</p>
               <p> {this.state.petsObject.Demi.name} | {this.state.petsObject.Demi.favorite_toy}</p>

                <button onClick={(event) => this.handleDelete(event, this.state._id)}>
                  Delete
               
                </button>
              </li>
            
        


        </ul>
        <form onSubmit={this.handleAdd}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="favoriteToy"
            value={this.state.favorite_toy}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>

        </form>
      </div>
    );
  }
}

export default App;
