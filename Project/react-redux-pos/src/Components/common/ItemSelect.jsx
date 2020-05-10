import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import styles from './home.module.css'
import { addItem } from '../../Redux/Actions'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class ItemSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            qty: 1
        }
    }

    render() {
        const { data, addItem } = this.props
        return (
            <FormControl className={styles.select}>
                <InputLabel id="demo-simple-select-autowidth-label" style={{ marginLeft: '20px' }}>Items</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={this.state.title}
                    onChange={e =>
                        this.setState({
                            title: e.target.value
                        })
                    }
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {
                        data && data.map(item => <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
                    }
                </Select>
                <FormHelperText style={{ marginLeft: '17px', }}>Please select the items from above list</FormHelperText>
                <Typography variant="h4" style={{ margin: 'auto' }}>Qty : {this.state.qty}</Typography>
                <Box style={{ margin: 'auto', marginTop: '5px' }}>
                    <Fab style={{ backgroundColor: '#8bc34a' }} aria-label="add">
                        <AddIcon
                            onClick={() =>
                                this.setState({
                                    qty: this.state.qty + 1
                                })
                            }
                        />
                    </Fab>
                    {
                        this.state.qty !== 0 ?
                            <Fab style={{ backgroundColor: '#8bc34a' }} aria-label="add">
                                <RemoveIcon
                                    onClick={() =>
                                        this.setState({
                                            qty: this.state.qty - 1
                                        })
                                    }
                                />
                            </Fab> :
                            <></>
                    }
                </Box>
                <Button
                    onClick={() =>
                        (
                            addItem(this.state),
                            this.setState({
                                title: '',
                                qty: 1
                            })
                        )
                    }
                    variant="contained"
                    style={{ backgroundColor: '#8bc34a', width: '20%', margin: 'auto', marginTop: '5px' }}
                >
                    Add
                </Button>
            </FormControl>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.app.data,
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
)(ItemSelect);
