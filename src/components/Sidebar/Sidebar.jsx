import React, { useContext, useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";


const sidebar = () => {

    const [extended, setExtended] = useState(false);
    const [isDark, setIsDark] = useState('dark');
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
    
    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const changeTheme = ()=> {
        if(isDark === "dark"){
            setIsDark('light')
        } 
        else {
            setIsDark('dark')
        } 
    }

    useEffect(() =>{
        document.querySelector("#root").className=isDark;
    },[isDark])
    
  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between py-[25px] px-[15px]'>
        <div className="top">
            <img title='Exapand Menu' onClick={()=>setExtended(prev=>!prev)} className='menu block ml-[10px] cursor-pointer' src={assets.menu_icon} alt="" />
            <div title='New Chat' onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] rounded-[50px] text-md text-zinc-500 cursor-pointer">
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
            <div title='Theme' onClick={changeTheme} className="bottom-item toggle-theme recent-entry">
                    {isDark === 'dark'
                    ? <MdOutlineLightMode size="22px" />
                    :<MdOutlineDarkMode size="22px" />}
                {extended?<p>Theme</p>:null}
            </div>
            <div title='History' className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>History</p>:null}
            </div>
            <div title='Activity' className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div title='Settings' className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default sidebar