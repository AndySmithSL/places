import React from "react";
import { connect } from "react-redux";

import { FilterableContentList } from "../../common/FilterableContentList";
import { filterContinents } from "../../../../../reducers/continents";
import ContinentTile from "../ContinentTile";

import "./ListContinents.scss";

class ListContinents extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange = (filter) => {
    this.props.filterContinents(filter);
  };

  render() {
    const { continents, filter } = this.props;
    const items = [];

    continents.forEach((continent) => {
      // Check if name is filtered out
      if (
        continent.name.toUpperCase().indexOf(filter.toUpperCase()) === -1 &&
        continent.code.toUpperCase().indexOf(filter.toUpperCase()) === -1
      ) {
        return;
      }

      items.push(<ContinentTile item={continent} key={continent.id} />);
    });

    return (
      <div className="ListContinents">
        <FilterableContentList
          onFilterTextChange={this.handleFilterTextChange}
          items={items}
          filter={this.props.filter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    continents: state.continents.continents.items,
    filter: state.continents.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterContinents: (filter) => dispatch(filterContinents(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContinents);
