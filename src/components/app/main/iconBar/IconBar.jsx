import React from "react";
import { connect } from "react-redux";

import { IconBarItem } from "./IconBarItem";
import { setCategory } from "../../../reducers/categories";

import "./IconBar.scss";

class IconBar extends React.Component {
  render() {
    const iconBarItems = this.props.categories.map((category) => {
      return (
        <IconBarItem
          category={category}
          handleClick={this.props.setCategory}
          key={category.name}
        />
      );
    });

    return <div className="IconBar">{iconBarItems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (category) => dispatch(setCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconBar);
