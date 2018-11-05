import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import imglaa from '../../assets/1倍.png'
import style from './index.css';

interface Istate {
  ruleTitle: string;
}

class Explain extends React.PureComponent<Istate> {

  public render() {
    return (
        <div className="bfb">
          <a href="#hdgz" className={style.btn}>
            {this.props.ruleTitle}
            <img src={imglaa} alt=""/>
          </a>
        </div>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (
  state,
  ownProps
) => ({
  ruleTitle: state.index.ruleTitle
});

export default connect(
  mapStateToProps,
  null
)(Explain);
