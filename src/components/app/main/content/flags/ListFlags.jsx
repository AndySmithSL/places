import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterFlags } from '../../../../reducers/flags';
import TileFlag from './TileFlag';

import './ListFlags.scss';

class ListFlags extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterFlags(filter);
    }

    render() {
        const items = [];

        this.props.flags.forEach(flag => {
            // Check if name is filtered out
            if((flag.name.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) &&
                (flag.code.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1)) {
                return;
            }

            items.push(<TileFlag item={flag} icon={this.props.icon} handleClick={this.props.handleItemChange} key={flag.id} />)
        });

        return (
            <div className="ListFlags">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        flags: state.flags.items,
        filter: state.flags.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterFlags: filter => dispatch(filterFlags(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFlags)
