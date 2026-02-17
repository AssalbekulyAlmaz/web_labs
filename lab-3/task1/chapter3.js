
const strictModeDemo = () => {
  try {
    undeclaredVariable = 5;
  } catch (error) {
    return error instanceof ReferenceError;
  }

  return false;
};

const locallyStrictFunction = () => {
  const value = 10;
  return value * 2;
};

