import React from 'react';
import {connect} from 'react-redux';

export function Header({car}){
  console.log(car);
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};
function mapStateToProps(state){
    return{
      car : state.general.car,
    }
}
export default connect(
  mapStateToProps
)(Header);
