import {connect} from "react-redux";
import Login from "./Login";
import {loginOut, getLoginPass} from "../redux/authReducer";





const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})






export default connect(mapStateToProps, {getLoginPass, loginOut}) (Login)