export const startAction = (name, params) => ({
  type: "START",
  payload: {
    action: { name, params },
  },
});

export const stopAction = (name, params) => ({
  type: "STOP",
  payload: {
    action: { name, params },
  },
});
