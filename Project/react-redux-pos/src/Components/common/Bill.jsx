import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeItem } from '../../Redux/Actions'
import styles from './home.module.css'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    render() {
        const { items, removeItem } = this.props
        let bill = 0
        for(let i=0; i<items.length; i++){
            bill+=items[i][0].price*items[i][1]
        }
        return (
            <div className={styles.bill}>
                <Typography variant="h4" gutterBottom>
                    Bill
                </Typography>
                {
                    items && items.map(item => <Typography variant="h5" gutterBottom>{item[0].title} : {item[0].price*item[1]}</Typography>)
                }
                <Divider variant="middle"/>
                <Typography variant="h4" gutterBottom>
                    Total Bill : {bill}
                </Typography>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.app.data,
        items: state.app.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItem: a => dispatch(removeItem(a)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bill);
