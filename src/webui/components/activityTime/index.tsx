import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import style from './index.css';

interface Istate {
  time_text: string;
}

class ActivityTime extends React.PureComponent<Istate> {
  public render() {
    return (
        <div className={style.btn}>
            {this.props.time_text}
        </div>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (
  state,
  ownProps
) => ({
  time_text: state.index.time_text
});

export default connect(
  mapStateToProps,
  null
)(ActivityTime);
