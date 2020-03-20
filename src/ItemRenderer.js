import React, { PureComponent } from "react";
import "./ItemRenderer.css";

export default class ItemRenderer extends PureComponent {
  render() {
    const { index, style } = this.props;

    return (
      <div className="Item" style={{ ...style }}>
        Row {index}
      </div>
    );
  }
}
