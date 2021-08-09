import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../redux/profileReducer";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){

            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

        // axioc.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId ).then(response => {
        //     // this.props.toggleIsFetching(false)
        //     this.props.setUserProfile(response.data)
        // })
    }


    render(){
        return(

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})


export default compose(connect (mapStateToProps, {getProfile, getStatus, updateStatus}),withRouter, withAuthRedirect)(ProfileContainer)


//
// let WithUrlDataCaontainerComponent = withRouter(AuthRedirectComponent)
//
//
//
// export default connect (mapStateToProps, {getProfile})(WithUrlDataCaontainerComponent)
