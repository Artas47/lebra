import { createSelector } from "reselect";

const uiStore = (state) => state.ui;

export const checkIfLoading = (...actionsToCheck) =>
  createSelector([uiStore], (ui) =>
    ui.loader.actions.some((action) => actionsToCheck.includes(action.name))
  );
