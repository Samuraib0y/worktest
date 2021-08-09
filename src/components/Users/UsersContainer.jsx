import React from "react";
import connect from "react-redux/lib/connect/connect";
import {
    follow, getUsersThunk, setCurrentPage, toggleIsFollowing, unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../assets/images/Preloader.jsx";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);



        // this.props.toggleIsFetching(true)
        //     getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setUsersCount(data.totalCount)
        //     }
        // )

    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axioc.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //                 this.props.setUsers(response.data.items
    //                 )
    //             }
    //         )
    //     }
    // }


    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users  totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}
                   users={this.props.users} toggleIsFollowing={this.props.toggleIsFollowing} followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setUsersCount: (usersCount) => {
//             dispatch(setUsersCountAC(usersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }



export default compose(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleIsFollowing, getUsersThunk})
 )(UsersAPIComponent)
