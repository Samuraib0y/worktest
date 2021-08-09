import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import  {Route} from "react-router-dom";
import MessagesContainer from "./components/Messeges/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginConrainer from "./Login/LoginConrainer";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./assets/images/Preloader";
import TestContainer from "./components/Test/TestContainer";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }
        render()
        {
            if (!this.props.initialized) {
                return <Preloader/>
            }


            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path={"/test"} render={() => <TestContainer/>} />
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer store={this.props.store}/>}/>
                        <Route path="/login" render={() => <LoginConrainer/>}/>
                    </div>
                </div>
            )
        }
    }



    const mapStateToProps = (state) => ({
        initialized: state.app.initialized
    })

    export default compose ( withRouter, connect(mapStateToProps, {initializeApp}))(App);
