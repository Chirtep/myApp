import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} logout={this.props.logout}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userProfile: state.auth.userProfile,
    userId: state.auth.userId
});

let authContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {logout})(authContainerComponent)