import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
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
    login: state.auth.login
});

let authContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps, {setAuthUserData})(authContainerComponent)