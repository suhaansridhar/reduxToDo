import React from 'react';
import { connect } from 'react-redux';
import {buyCake} from '../Actions/ActionCreators/buyCake';

export function CakeContainer(props) {
  return (
    <div>
      <h2>No of cakes: {props.numberOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfCakes : state.numberOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer)

