import C from './constants/constants';

export const image = (state = {}, action) => {
  switch (action.type) {
  case C.INCREASE:
    let newCount = state.count + 1;
    return (state.id !== action.id) ? state : {...state, newCount }

  case C.DECREASE:
    let newCount = state.count - 1;
    return (state.id !== action.id) ? state : {...state, newCount }

  case C.ADD_IMAGE:
    return {
      id: action.id,
      img: action.img,
      count: 0
    }

  default:
    return state;
  }
}

export const images = (state = [], action) => {
  switch (action.type) {

  case C.ADD_IMAGE:
    return [...state, image({}, action)]

  default:
    return state;
  }
}