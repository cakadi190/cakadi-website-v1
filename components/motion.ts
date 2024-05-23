const initialSlideFromLeftToRight = ref({
  x: -100,
  opacity: 0,
});
const enterSlideFromLeftToRight = ref({
  x: 0,
  opacity: 1,
});

const initialSlideFromRightToLeft = ref({
  x: -100,
  opacity: 0,
});
const enterSlideFromRightToLeft = ref({
  x: 0,
  opacity: 1,
});

export {
  initialSlideFromLeftToRight, 
  enterSlideFromLeftToRight, 
  initialSlideFromRightToLeft,
  enterSlideFromRightToLeft
};