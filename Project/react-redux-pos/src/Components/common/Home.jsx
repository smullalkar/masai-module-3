import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from './home.module.css'
import { addItem } from '../../Redux/Actions'
import ItemSelect from './ItemSelect'
import TableShown from './TableShown'
import Bill from './Bill';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    render() {
        const { isLoggedin, data, items} = this.props
        if (isLoggedin) {
            return (
                <div className={styles.grid}>
                    <ItemSelect/>
                    <TableShown/>
                    <Bill/>
                </div>
            )
        }
        else {
            return (
                <>
                    {
                        this.props.history.push('/login')
                    }
                </>
            )
        }
    }
}

const mapStateToProps = state => {
    console.log("state :", state)
    console.log("items :", state.app.items)

    return {
        isLoggedin: state.auth.isLoggedin,
        token: state.auth.token,
        data: state.app.data,
        items: state.app.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: a => dispatch(addItem(a)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
