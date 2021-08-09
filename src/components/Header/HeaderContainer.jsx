import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import { loginOut} from "../../redux/authReducer";




class HeaderContainer extends React.Component {





        // authMe().then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login} = data.data;
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // })


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect( mapStateToProps, {loginOut})(HeaderContainer);