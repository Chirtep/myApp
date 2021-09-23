import React from "react";
import Header from "./Header";
import {setAuthUserData, setAuthUserProfile} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                    profileAPI.getProfile(id)
                        .then(data => {
                            this.props.setAuthUserProfile(data)
                        })
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserProfile})(authContainerComponent)