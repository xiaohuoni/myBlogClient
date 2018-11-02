import * as React from 'react';

export default class App extends React.Component{
  public conbind(){
    console.log(111);
  }

  public render(){
    return (
      <div>
        <h1 onClick={this.conbind}>Hello Word</h1>
      </div>
    )
  }
}
