import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf, deleteSmurf, updateSmurf, selectingSmurf} from '../actions';
import Smurfs from './Smurfs.js'
import FormSmurf from './FormSmurf'
import './App.css'; 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }

  handleDelete = id => {
    console.log(id)
    this.props.deleteSmurf(id);
  }

  handleUpdate = smurf => {
    //console.log(smurf)
    //this.props.updateSmurf(id);
    this.props.selectingSmurf(smurf);
  }

  toggleUpdateForm() {

  }

  render() {
    console.log(this.props, 'in render')
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <FormSmurf 
          selectedSmurf={this.props.selectedSmurf} 
          addSmurf={this.props.addSmurf}
          updateSmurf={this.props.updateSmurf}/>

        <Smurfs smurfs={this.props.smurfs}
          deleteSmurf={this.handleDelete}
          updateSmurf={this.handleUpdate} />
        
      </div>
    );
  }
}

//export default App;

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    selectedSmurf:  state.selectedSmurf
  }
}
export default connect(
  mapStateToProps,
  { getSmurf, addSmurf, deleteSmurf, updateSmurf, selectingSmurf }
)(App);
