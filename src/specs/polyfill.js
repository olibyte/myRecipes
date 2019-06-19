const requestAnimationFramer = cb => {
  setTimeout(cb, 0);
};

global.requestAnimationFrame = requestAnimationFrame;

export default requestAnimationFrame;
