import changeTheNumber from "./updown";

//~combine the all reducers together

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeTheNumber
    }
);

export default reducers;

