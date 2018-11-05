import * as React from "react";
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps
} from "react-redux";
import ActivityTime from "../../components/activityTime";
import Commodity from "../../components/commodity";
import Explain from "../../components/explain";
import RemainingTime from "../../components/remainingTime";
import Rule from "../../components/rule";

import style from "./index.css";

import * as moment from "moment";

interface Istate {
  title: string;
  no_activity_end_time: number;
  initDispath: (action: any) => void;
  updatatime: (action: any) => void;
}

class Index extends React.Component<Istate> {
  public render() {
    return (
      <React.Fragment>
        <header>
          <div className={style.clear_float}>
            <Explain />
          </div>
          <h1 className={style.title}>{this.props.title}</h1>
          <ActivityTime />
          <RemainingTime />
        </header>
        <main>
          <Commodity />
        </main>
        <footer id="hdgz">
          <Rule />
        </footer>
      </React.Fragment>
    );
  }

  public componentDidMount() {
    fetch("https://api.wantaoke.com/api/misc/settings")
      .then(res => res.json())
      .then(res => {
        const goods = {
          activity_end_time: moment(res.data.activity_end_time).format(
            "YYYY年MM月DD日H:mm:ss"
          ),
          activity_start_time: moment(res.data.activity_start_time).format(
            "YYYY年MM月DD日H:mm:ss"
          ),
          goods: {
            image: res.data.main_image,
            mony: res.data.price,
            qrcode: res.data.qrcode,
            title: res.data.goods_name
          },
          item_num: res.data.item_num,
          no_activity_end_time: res.data.activity_end_time,
          title: res.data.title,
          type: "INIT_MY_APP"
        };

        this.props.initDispath(goods);
      });

    const dsq = setInterval(() => {
      const duration = moment.duration(
        moment(this.props.no_activity_end_time).diff(new Date())
      );
      
      const IfcountDown = duration
      .asHours()
      .toString()
      .substring(
        0,
        duration
          .asHours()
          .toString()
          .indexOf(".")
      )

      const updatatime = {
        countDown: [
          IfcountDown,
          moment([2000, 1, 1])
            .add(duration)
            .format("mm"),
          moment([2000, 1, 1])
            .add(duration)
            .format("ss")
        ],
        type: "UPDATA_TIME"
      };


      if (this.props.no_activity_end_time < Date.now()){
        clearInterval(dsq)
      } else {
        this.props.updatatime(updatatime);
      }
      
    }, 1000);
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = state => ({
  no_activity_end_time: state.index.no_activity_end_time,
  title: state.index.title
});

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = dispatch => ({
  initDispath(action: any) {
    dispatch(action);
  },
  updatatime(action: any) {
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
