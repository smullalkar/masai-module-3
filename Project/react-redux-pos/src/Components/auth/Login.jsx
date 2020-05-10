import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styles from './login.module.css'
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { loginUser} from '../../Redux/Actions'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pass: '',
            uname: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            id: uuidv4(),
        })
    }

    render() {
        const { loginUser, isLoggedin, isLoading} = this.props
            return (
                <div className={styles.div}>
                    <form>
                        {isLoading && <div>LOADING...</div>}
                        <div className={styles.margin}>
                            <TextField 
                            name='uname'
                            value={this.state.uname}
                            onChange={this.handleChange}
                            label="Username" 
                            style={{width: '300px'}}/>
                        </div>
                        <div className={styles.margin}>
                            <TextField 
                            name='pass'
                            value={this.state.pass}
                            onChange={this.handleChange}
                            label="Password" 
                            type="password" 
                            style={{width: '300px'}}/>
                        </div>
                        <div className={styles.margin}>
                            <Button 
                            onClick={() => { 
                                loginUser(this.state) 
                            }}
                            style={{backgroundColor:'#8bc34a'}}
                            variant="contained" 
                            >
                                Login
                            </Button>
                        </div>
                        {
                            isLoggedin? this.props.history.push('/') : <div></div>
                        }
                    </form>
                </div>
            )
    }
}

const mapStateToProps = state => {
    console.log("state :", state)
    return {
        isLoggedin: state.auth.isLoggedin,
        isLoading: state.auth.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: a => dispatch(loginUser(a)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
