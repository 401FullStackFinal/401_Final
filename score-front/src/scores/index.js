//TODO: REFACTOR!

import React from 'react';
import { connect } from 'react-redux';
import { updateFood, deleteFood } from '../../actions/foodActions';

class Dish extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      originalName: '',
      name: '',
      flavor: '',
    }
  }

  componentDidMount(){
    if (this.props.dish){
      this.setState({ originalName: this.props.dish.name, name: this.props.dish.name, flavor: this.props.dish.flavor });
    }
  }

  // componentDidUpdate(){
  //   if (this.props.dish){
  //     this.setState({ originalName:  });
  //   }
  // }

  handleUpdate = (event) => {
    event.preventDefault();
    this.props.updateFood(this.state);
  }

  handleDelete = (event) => {
    this.props.deleteFood(event.target.name);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
      <React.Fragment>
        <li>{`${this.props.dish.name} ${this.props.dish.flavor}`}</li>
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            placeholder='name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder='flavor'
            name='flavor'
            value={this.state.flavor}
            onChange={this.handleChange}
          />
          <button name={this.props.dish.name}>UPDATE</button>
        </form>
        <button name={this.props.dish.name} onClick={this.handleDelete}>DELETE</button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFood: (dish) => dispatch(updateFood(dish)),
    deleteFood: (name) => dispatch(deleteFood(name))
  }
}

export default connect(null, mapDispatchToProps)(Dish);