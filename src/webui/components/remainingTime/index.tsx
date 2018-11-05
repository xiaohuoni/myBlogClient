import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import style from './index.css';

interface Istate {
  countDown: string[];
}

class RemainingTime extends React.PureComponent<Istate> {

  public render() {
    return (
        <div className={style.title}>
            距离活动结束仅剩
            <b className={style.text}>{this.props.countDown[0]}</b>时
            <b className={style.text}>{this.props.countDown[1]}</b>分
            <b className={style.text}>{this.props.countDown[2]}</b>秒
        </div>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (
  state,
  ownProps
) => ({
  countDown: state.index.countDown
});

export default connect(
  mapStateToProps,
  null
)(RemainingTime);
