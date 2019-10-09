import React from 'react';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      scores: [],
      nameData: '',
      scoreData: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/score')
    .then(response => response.json())
    .then(body => this.setState({ scores: body }));
  }

  handleDelete  = (event, _id) => {
    event.preventDefault();
    fetch('http://localhost:8080/score', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    }).then(response => response.json())
      .then(body => this.setState({ scores: body }));
  }

  handleAdd = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: this.state.nameData, score: this.state.scoreData }),
    }).then(response => response.json())
      .then(data => this.setState((previousState) => {
        return { scores: [...previousState.scores, data].sort((a, b) => b.score - a.score)}
      }));
  }

  handleChange = event => {
    const { name, value } = event.target; 
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <h1>High Scores</h1>
        <ul>

        {this.state.scores.map((score, index) => {
            return (
              <li key={score._id} >
                {index === 0 ? <p> High Score {score.name} - {score.score}</p> : <p> {score.name} - {score.score} </p>}
                <button onClick={(event) => this.handleDelete(event, score._id)}>
                  Delete
                </button>
              </li>
            )
          }
        )}
        </ul>

        <form onSubmit={this.handleAdd}>
          <input
            name="name"
            value={this.state.nameData}
            onChange={this.handleChange}
          />
          <input
            name="score"
            value={this.state.scoreData}
            onChange={this.handleChange}
          />

          <button type="submit">Add</button>

        </form>
      </div>
    );
  }

} 

export default App;
