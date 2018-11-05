import * as _ from "lodash";
import { Reducer } from "redux";

export interface Istore {
  title: string;
}

const Store: Istore = {
  title: 'hello world'
};

const reducer: Reducer = (state = Store, action) => {
  const newState = _.cloneDeep<Istore>(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
