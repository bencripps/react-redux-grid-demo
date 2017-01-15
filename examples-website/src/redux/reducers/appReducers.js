import * as types from "../types/types"; 

const simpleFeatures = [
  "Flat List➖",
  "Local and/or Remote Data Source",
  "Built-in Error Handling Module",
  "Handles Huge amount of Records (1000000+) ⭐️"
]

const allFeatures = [
  "Flat List or Tree Structure ➖ 🌲",
  "Local and/or Remote Data Source",
  "Local and/or Remote Pagination",
  "Extensive Column Definitions 💪",
  "Draggable Column Width/Resizing",
  "Draggable Column Ordering",
  "Sortable Columns",
  "Grid Action Menus",
  "Bulk Action Toolbar",
  "Selection Model (Single, MultiSelect, Checkbox)",
  "Event Handling for all kinds of DOM Events (List Below)",
  "Extendable and Modular Style Built with JavaScript :bowtie:",
  "Loading Mask",
  "Built-in Error Handling Module",
  "Handles Huge amount of Records (1000000+) ⭐️"
];

const getFeatures = (featureTitle) => {
  switch(featureTitle){
    case "All Features" :
      return allFeatures;
    case "Simple" :
    default :
      return simpleFeatures;  
  }
}

const initialState = {
  ready: false,
  name: "React Redux Grip Examples",
  features: getFeatures('All Features'),
  featureTitle: "All Featured",
  allFeatures: allFeatures,
  simpleFeatures: simpleFeatures
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
        features: getFeatures(action.featuredTitle),
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