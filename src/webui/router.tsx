import * as React from 'react';
import { Route } from "react-router-dom";
import index from './views/index'

const AppRouter = () => (
  <React.Fragment>
      <Route path="/" component={index}/>
  </React.Fragment>
)

export default AppRouter;
