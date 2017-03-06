import React from 'react';
import {connect} from 'react-redux';

const mapStateToAppProps = (state) => ({location: state.location})

let Home = (props) => (
  <div>Home</div>
);

Home = connect(mapStateToAppProps)(Home)
export default Home;