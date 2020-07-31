import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../action/counter"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class App extends Component {
  // const count = useSelector(state => state.counter)
  // const dispatch = useDispatch();


  componentWillMount() {
    this.getItems()
}
  getItems() {
    const { dispatch } = this.props
    dispatch(increment)
  }

  render() {
    const counter =this.props
    return (
      <div className="App">
        {/* <p1> Counter is {counter}</p1> */}
        <button onClick={() => this.getItems}>+</button>
        {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  counter: state.counter
})
function mapDispathToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ increment }, dispatch));

}
export default connect(mapStateToProps, mapDispathToProps)(App)
