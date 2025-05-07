//action
const TOGGLE_COMPARE = 'app/products/TOGGLE_COMPARE';

//action creator
export const toggleCompare = payload => ({ type: TOGGLE_COMPARE, payload });

//reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_COMPARE: {
      if (statePart.includes(action.payload)) {
        return statePart.filter(id => id !== action.payload);
      } else if (statePart.length < 4) {
        return [...statePart, action.payload];
      } else {
        return statePart;
      }
    }
    default:
      return statePart;
  }
}
