const delay = (millisec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisec);
  });
};

export default delay;
