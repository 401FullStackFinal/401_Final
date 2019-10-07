import React from 'react';
import { connect } from 'react-redux';
import { getScores, deleteScore, newScore } from '../actions/scoreActions.js';
const superagent = require('superagent');

const API_URL = 'http://localhost:8080';

class Score extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

    componentDidMount(){
      superagent.get(`${API_URL}/score`)
      .then(results => {
        this.props.getScores(results.body);
      })
      .catch(console.log('error here'));
  };

  getScores = (event) => {
    event.preventDefault();
    this.props.getScores(this.state);
  }
  
  handleUpdate = (event) => {
    event.preventDefault();
    this.props.newScore(this.state);
  }
  
  handleDelete = (event) => {
    this.props.deleteScore(event.target.id);
  }
  render(){
    return(
      // coming back as undefined
      <React.Fragment>
        <li>{`${this.props.id} ${this.props.name} ${this.props.score}`}</li>
        <li>{`${this.props.id} ${this.props.name} ${this.props.score}`}</li>
        <li>{`${this.props.id} ${this.props.name} ${this.props.score}`}</li>
        <li>{`${this.props.id} ${this.props.name} ${this.props.score}`}</li>
        <li>{`${this.props.id} ${this.props.name} ${this.props.score}`}</li>
      </React.Fragment>
    );
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getScores: (score) => dispatch(getScores(score)),
    newScore: (score) => dispatch(newScore(score)),
    deleteScore: (id) => dispatch(deleteScore(id))
  }
}


export default connect(null, mapDispatchToProps)(Score);