import React from 'react';
import { connect } from 'react-redux';

import { fetchFlag } from '../../../../reducers/flags';
import { setCategory } from '../../../../reducers/categories';
import { DetailsHeader } from '../common/DetailsHeader';
import { ContentList } from '../common/ContentList';
import FlagTile from '../flags/FlagTile';

import './HomeFlagsOnDay.scss';

class HomeFlagsOnDay extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.setCategory(category);
        this.props.fetchFlag(id);
    }

    render() {

        const { fetching, flags, category } = this.props;
        
        if(fetching) {
            return (
                <div className='loading'>LOADING...</div>
            )
        }

        const today = new Date();

        let result = flags.filter(flag => { 
            if(flag.startDate === null) {
                return false;
            }
            var startDate = new Date(flag.startDate);
            return startDate.getMonth() === today.getMonth() && startDate.getDate() === today.getDate()
        });

        let items = result.map(item => <FlagTile flag={item} key={item.id} />);

        return (
            <div className='HomeFlagsOnDay'>
                <DetailsHeader label="Today's Flags" icon={category.icon}/>
                <ContentList items={items} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        flags: state.flags.items,
        fetching: state.flags.isFetching,
        category: state.categories.categories.find(x => x.name === "Flags")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFlag: id => dispatch(fetchFlag(id)),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFlagsOnDay)
