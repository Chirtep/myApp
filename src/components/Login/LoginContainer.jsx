import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {getAuthMe, loginMe} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }

        return <Login loginMe={this.props.loginMe}/>
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, {loginMe, getAuthMe})(LoginContainer))