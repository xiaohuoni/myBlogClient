import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import index from './views/index'

const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route path="/" component={index}/>
        </React.Fragment>
    </BrowserRouter>
)

export default AppRouter;



export default (

)
