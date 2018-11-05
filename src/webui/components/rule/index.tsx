import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import style from './index.css';

interface Istate {
  rule: any;
  ruleTitle: string;
}

class Rule extends React.PureComponent<Istate> {

  public render() {
    return (
        <React.Fragment>
            <h3 className={style.title}>{this.props.ruleTitle}</h3>
            <ul className={style.items}>
                {this.props.rule.map( (items:any)=> {
                    return <li key={items.id}>{items.text}</li>
                })}
            </ul>
        </React.Fragment>
    );
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = (
  state,
  ownProps
) => ({
  rule: state.index.rule,
  ruleTitle: state.index.ruleTitle
});

export default connect(
  mapStateToProps,
  null
)(Rule);
