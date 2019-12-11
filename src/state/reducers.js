import * as types from './actionTypes';

const initialAdditionalPrice = 0;
export function additionalPriceReducer(additionalPrice=initialAdditionalPrice, action){
    return additionalPrice;
}

const initialCar =  {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  }
  export function carReducer(car=initialCar, action){
      return car;
  }
  const initialAdditionalFeatures = [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
  export function additionalFeaturesReducer(additionalFeatures=initialAdditionalFeatures , action){
    return additionalFeatures;
  }