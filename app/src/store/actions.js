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