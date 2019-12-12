import React from 'react';
import { connect } from 'react-redux';
import {addFeature} from '../state/actionCreators';

export function AdditionalFeature(props) {
  const buyItem = (item)=>{
      props.addFeature(item);
     
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={()=>buyItem(props.feature)}
      >

      Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(state=>state, {addFeature})(AdditionalFeature);
