import * as types from "../types/types"; 
import * as features from "./features";
import { LOCATION_CHANGE } from 'react-router-redux';

const getFeatures = (featureTitle) => {
  let key = featureTitle.toLowerCase() + "Features"; 
  return features[key]
}

const initialState = {
  ready: false,
  name: "React Redux Grip Examples",
  features: getFeatures('Simple'),
  featureTitle: "Simple",
  featureTitles: features.featureTitles
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      console.log("App heard the route change action: ", action);
      let featureTitle = action.payload.pathname.split("/")[1];
      if (featureTitle === "") featureTitle = "Simple";
      return {
        ...state,
        featureTitle,
        features: getFeatures(featureTitle),
        ready: true
      };
    case types.APP_READY:
      return {
        ...state,
        ready: true
      };
    case types.FEATURE_SWITCH:
      return {
        ...state,
        features: getFeatures(action.featureTitle),
        featureTitle: action.featureTitle
      };  
    default:
      return state;
  }
}

export function ready() {
  return {
    type: types.APP_READY
  };
}