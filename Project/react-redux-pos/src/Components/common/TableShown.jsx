import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { removeItem } from '../../Redux/Actions'
import styles from './home.module.css'

class TableShown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    render() {
        const { items, removeItem } = this.props
        return (
            <>
                <TableContainer component={Paper} className={styles.table}>
                    <Table ria-label="caption table">
                        <caption>*there is no exchange policy on food items</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Qty</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items && items.map((row) => (
                                <TableRow key={row[0].title}>
                                    <TableCell component="th" scope="row">
                                        {row[0].title}
                                    </TableCell>
                                    <TableCell align="right">{row[0].type}</TableCell>
                                    <TableCell align="right">{row[0].rating}</TableCell>
                                    <TableCell align="right">{row[0].price*row[1]}</TableCell>
                                    <TableCell align="right">{row[1]}</TableCell>
                                    <TableCell align="right">
                                        <DeleteIcon
                                        onClick={() =>
                                            removeItem(row[0].id)
                                        }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
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
)(TableShown);
