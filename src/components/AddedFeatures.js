import React from 'react';

import AddedFeature from './AddedFeature';

import {connect} from 'react-redux';

export function AddedFeatures({features}) {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
function mapStateToProps(state){
  return{
    features: state.general.car.features
  }
}

export default connect(
  mapStateToProps

)(AddedFeatures);
