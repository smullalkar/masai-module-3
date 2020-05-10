import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import {logout} from '../../Redux/Actions'

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,
      },
    logo: {
        height: '60px',
        width: '150px'
    }
}));

function Navbar(props) {
    const classes = useStyles();
    const [Login, setLogin] = useState(false);
    const {isLoggedin, logout} = props
    if(isLoggedin){
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor:'#8bc34a'}}>
                    <Toolbar>
                        <Typography className={classes.title}>
                            <Link
                                to='/'
                                variant="body2"
                                style={{ color: 'black', fontSize:'20px', textDecoration: 'none' }}
                            >
                                <img alt='img' className={classes.logo} src={require('../logo.png')}></img>
                            </Link>
                        </Typography>
                        <Link
                            to='/register'
                            style={{ color: 'black', margin:'10px', fontSize:'20px', textDecoration: 'none' }}
                        >
                        Register
                        </Link>
                        <Link
                            to='/login'
                            onClick = {()=> logout(setLogin(true))}
                            style={{ color: 'black', margin: '10px', fontSize:'20px', textDecoration: 'none' }}
                        >
                        Logout
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
    else{
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor:'#8bc34a'}}>
                    <Toolbar>
                        <Typography className={classes.title}>
                            <Link
                                to='/'
                                variant="body2"
                                style={{ color: 'black', fontSize:'20px', textDecoration: 'none' }}
                            >
                                <img alt='img' className={classes.logo} src={require('../logo.png')}></img>
                            </Link>
                        </Typography>
                        <Link
                            to='/register'
                            style={{ color: 'black', margin:'10px', fontSize:'20px', textDecoration: 'none' }}
                        >
                        Register
                        </Link>
                        <Link
                            to='/login'
                            style={{ color: 'black', margin: '10px', fontSize:'20px', textDecoration: 'none' }}
                        >
                        Login
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("state :", state)
    return {
        isLoggedin: state.auth.isLoggedin,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: a => dispatch(logout(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)