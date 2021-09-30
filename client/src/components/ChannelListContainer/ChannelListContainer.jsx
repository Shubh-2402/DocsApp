import React from 'react'
import {ChannelList} from "stream-chat-react"
import {ChannelSearch,TeamChannelList,TeamChannelPreview} from ".."
import Cookies from 'universal-cookie'
import "./ChannelListContainer.css"
import HospitalIcon from "../../assets/hospital.png"
import LogoutIcon from "../../assets/logout.png"

const cookies = new Cookies()

const Sidebar = ({logout})=>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital"  width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout"  width="30"/>
            </div>
        </div>
    </div>
)

const CompanyHeader = () =>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">DocsApp</p>
    </div>
)

function ChannelListContainer() {

    const logout = ()=>{
        cookies.remove('token')
        cookies.remove('username')
        cookies.remove('fullName')
        cookies.remove('userId')
        cookies.remove('phoneNumber')
        cookies.remove('avataURL')
        cookies.remove('hashedPassword')

        window.location.reload()
    }
    return (
        <>
            <Sidebar logout={logout}/>
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}

                    Preview={(previewProps)=>{
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    }}
                 />

                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}

                    Preview={(previewProps)=>{
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    }}
                 />
            </div>
        </>
    )
}

export default ChannelListContainer
