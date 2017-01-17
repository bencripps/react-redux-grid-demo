import * as types from "../types/types"; 
import * as features from "./features"


const getFeatures = (featureTitle) => {
  console.log("appReducers getFeatures: ", featureTitle);
  switch(featureTitle){
    case "All Features" :
      return features.allFeatures;
    case "Simple" :
      return features.simpleFeatures;
    default :
      return features.defaultFeatures;  
  }
}

const initialState = {
  ready: false,
  name: "React Redux Grip Examples",
  features: getFeatures('All Features'),
  featureTitle: "All Featured",
  featureTitles: features.featureTitles
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
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