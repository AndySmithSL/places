import React from "react";
import { connect } from "react-redux";

import { setCategory } from "../../../../reducers/categories";
import { fetchDrive } from "../../../../reducers/drives";

import "./DriveTile.scss";

class DriveTile extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (category, id) => {
    this.props.fetchDrive(id);
    this.props.setCategory(category);
  };

  render() {
    const { drive, category } = this.props;

    return (
      <div
        className="DriveTile"
        onClick={() => this.handleItemClick(category, drive.id)}
      >
        <div>
          <img src={category.icon} className="image" alt={drive.name} />
        </div>
        <div className="details">
          <div className="title">{drive.name}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categories.categories.find((x) => x.name === "Drives"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (category) => dispatch(setCategory(category)),
    fetchDrive: (id) => dispatch(fetchDrive(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriveTile);
