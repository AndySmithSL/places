import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterDrives } from '../../../../reducers/drives';
import { TileDrive } from './TileDrive';

import './ListDrives.scss';

class ListDrives extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterDrives(filter);
    }

    render() {
        const items = [];

        this.props.drives.forEach(drive => {
            // Check if name is filtered out
            if(drive.name.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) {
                return;
            }

            items.push(<TileDrive item={drive} icon={this.props.icon} handleClick={this.props.handleItemChange} key={drive.id} />)
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
        drives: state.drives.items,
        filter: state.drives.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterDrives: filter => dispatch(filterDrives(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDrives)
