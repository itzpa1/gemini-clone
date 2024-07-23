import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
    
    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    
  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" />
            <div onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-md text-zinc-500 cursor-pointer">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ?<div className="recent flex flex-col">
                <p className="recent-title mt-[30px] mb-[20px] ">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return (
                        <div onClick={()=>loadPrompt(item)} className="recent-entry flex ">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}</p>
                </div>
                    )
                })}
                
            </div>
            : null
        }
            
        </div>
        <div className="bottom flex flex-col">
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default sidebar