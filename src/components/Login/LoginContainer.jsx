import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {getAuthMe, loginMe} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {

    render() {
        return <Login loginMe={this.props.loginMe}/>
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, {loginMe, getAuthMe})(LoginContainer))