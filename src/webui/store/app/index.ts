import * as _ from "lodash";
import { Reducer } from "redux";

interface Igoods {
  image: string;
  mony: number;
  qrcode: string;
  title: string;
}

interface Itext {
  id: string;
  text: string;
}

interface Istore {
  countDown: string[];
  goods: Igoods[];
  rule: Itext[];
  ruleTitle: string;
  no_activity_end_time: string;
  time_text: string;
  title: string;
}

const Store: Istore = {
  countDown: [
    '00',
    '00',
    '00'
  ],
  goods: [],
  no_activity_end_time: ' ',
  rule: [
    {
      id: "8791235",
      text:
        "1、活动时间2018年10月25日14：00：00—2018年10月25日23：59：59，2000件抢光为止"
    },
    {
      id: "5346457",
      text: "2、福利商品数量有限，每个用户ID限领1个红包，先兑先得，兑完即止"
    },
    {
      id: "4576324",
      text: "2、福利商品数量有限，每个用户ID限领1个红包，先兑先得，兑完即止"
    },
    {
      id: "2135436",
      text:
        "3、红包仅限指定商品使用。使用红包下单直减，在小鹿心选APP上无销售订单、无返佣"
    },
    {
      id: "231",
      text:
        "4、红包在领取后当天24点前有效，红包不可提现、失效不退回。详见活动规则"
    },
    {
      id: "312",
      text: "5、领取的红包可在【手机淘宝】- 我的淘宝 - 红包卡券查询"
    },
    {
      id: "1231242",
      text: "6、该商品将在7天内发货"
    }
  ],

  ruleTitle: "活动规则",
  time_text: "活动已结束，期待下期",
  title: " "
};

const reducer: Reducer = (state = Store, action) => {
  const newState = _.cloneDeep<Istore>(state);
  switch (action.type) {
    case "INIT_MY_APP":
      newState.title = action.title;
      newState.goods.push(action.goods);
      newState.rule[0].text = `1、活动时间${action.activity_start_time}—${
        action.activity_end_time
      }，${action.item_num}件抢光为止`;
      newState.no_activity_end_time = action.no_activity_end_time;
      return newState;
    case "UPDATA_TIME":
      newState.time_text = "活动进行中";
      newState.countDown = action.countDown;
      return newState;
    default:
      return state;
  }
};

export default reducer;
