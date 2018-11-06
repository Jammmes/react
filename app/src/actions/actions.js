import C from './constants/constants';

export const increase = id =>
  ({
    type: C.INCREASE,
    id
  })

export const decrease = id =>
  ({
    type: C.DECREASE,
    id
  })

export const add_image = img =>
  ({
    type: C.ADD_IMAGE,
    img,
    id = state.imageList[state.imageList.length - 1] + 1
  })