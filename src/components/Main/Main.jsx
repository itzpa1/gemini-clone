import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData,setInput,input } = useContext(Context)
    

    return (
        <div className='main flex-1 min-h-[100vh] relative pb-[15vh] '>
            <div className="nav flex items-center justify-between text-[22px] p-[20px]  ">
                <p className='cursor-pointer'>Gemini</p>
                <img src={assets.user_icon} title='User' alt="" />
            </div>
            <div className="main-container max-w-[900px] m-auto ">

                {!showResult
                    ? <>

                        <div className="greet mx-0 my-[50px] text-[56px] font-medium p-[20px] ">
                            <p><span>Hello, Pawan.</span></p>
                            <p>How can I heelp you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Imporve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>

                    </>
                    :<div className='result py-0 px-[5%] max-h-[70vh] overflow-y-scroll '>
                        <div className="result-title my-[40px] mx-0 flex items-center gap-5 ">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data flex items-start gap-5">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                            ?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                        </div>
                    </div>
                }


                <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] py-0 px-5 m-auto ">
                    <div className="search-box flex items-center justify-between gap-5 px-5 py-[10px] rounded-[50px] ">
                        <input onChange={(e) => setInput(e.target.value)} value={input} className='flex-1  bg-transparent rounded-none outline-none p-2 text-[18px] ' type="text" placeholder='Enter a prompt here' />
                        <div className='flex items-center gap-[15px]  '>
                            <img src={assets.gallery_icon} title='Choose files' alt="" />
                            <img src={assets.mic_icon} title='Mic' alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} title='Send' alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info text-[13px] mx-auto my-[15px] font-light text-center ">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main