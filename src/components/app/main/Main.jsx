import React from 'react';
import { connect } from 'react-redux';

import IconBar from './iconBar/IconBar';
import Content from './content/Content';
import { fetchCategories } from '../../reducers/categories';

import './Main.scss';

class Main extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className="Main">
                <IconBar />
                <Content />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    };
};

export default connect(null, mapDispatchToProps)(Main)
