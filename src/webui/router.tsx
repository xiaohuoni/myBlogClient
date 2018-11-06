import * as React from 'react';
import { Route } from "react-router-dom";
import Index from './views/index'
// import Index2 from './views/index2'

const AppRouter = () => (
  <React.Fragment>
      <Route path="/" component={Index}/>
      <Route path="/2" component={Index}/>
  </React.Fragment>
)

export default AppRouter;
