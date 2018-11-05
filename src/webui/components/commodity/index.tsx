import * as React from "react";
import { connect, MapStateToProps } from "react-redux";

import style from "./index.css";

interface Igoods {
  image: string;
  mony: number;
  qrcode: string;
  title: string;
}

interface Istate {
  goods: Igoods[];
}

class Commodity extends React.PureComponent<Istate> {
  public render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.goods.map((items, index) => {
            return (
              <li key={index} className={style.items}>
                <div>
                  <img src={items.image} alt="" />
                </div>
                <div>
                  <h2 className={style.title}>{items.title}</h2>
                  <strong className={style.mony}>
                    <span>￥</span>
                    {items.mony}
                  </strong>
                  <div className={style.bg}>
                    <img src={items.qrcode} alt="" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state, ownProps) => ({
    goods: state.index.goods
});

export default connect(
  mapStateToProps,
  null
)(Commodity);
