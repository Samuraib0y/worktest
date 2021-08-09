import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../assets/images/Preloader";
import logoWork from "../../../assets/images/44569.png"
import ProfileStatus from "./ProfileStatus"





const  ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img className={s.headerimg} src="" alt=""/>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img src="" alt=""/>
                </div>
            </div>
            <div className={s.discription}>
                <img src={props.profile.photos.large} alt=""/>
                <div className={s.name}>{props.profile.fullName}</div>
            </div>
            <div className={s.status}>
                <div className={s.workStatus}>
                    <div className={s.workImage}> <span>Работаю {props.profile.lookingForAJob === true ? <img src={logoWork} alt=""/> : null}  </span></div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    {/*<div><span> Cтатус:</span><span>{props.profile.aboutMe}</span> </div>*/}
                </div>
            </div>
            <div className={s.social}>
                <ul>
                    <li><a href={props.profile.contacts.vk}>vk</a></li>
                    <li><a href={props.profile.contacts.facebook}>facebok</a></li>
                    <li><a href={props.profile.contacts.instagram}>instagram</a></li>
                    <li><a href={props.profile.contacts.github}>gitHub</a></li>
                </ul>
            </div>
        </div>
    )
}


//
// {props.lookingForAJob == true ? <img src={logoWork} alt=""/> : null}



export default ProfileInfo;
