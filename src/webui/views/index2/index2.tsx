import * as React from "react";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps
} from "react-redux";

import { Istore } from '../../store/app'

class Index extends React.Component<Istore> {
  public render() {
    return (
      <div>{this.props.title}</div>
    );
  }

  public componentDidMount() {
    
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = state => ({
  title: state.index.title
});

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
