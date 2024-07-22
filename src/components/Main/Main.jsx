import React, { useContext } from "react";
import "./Main.css"
import {assets} from '../../assets/assets';
import { Context } from "../../context/context";
function Main(){
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
    return(
        <>
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user} alt="" />
            </div>
            <div className="main-container">

                {!showResult ? <><div className="greet">
                    <p><span>Hello, dev</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful place to see on an upcoming road trip</p>
                        <img src={assets.card1} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.card2} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.card3} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.card4} alt="" />
                    </div>
                </div></>:<div className="result">

                    <div className="result-title">
                        <img src={assets.user} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.geminilogo} alt="" />
                        {loading ? <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>:
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                    </div>}
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.imguploader} alt="" />
                            <img src={assets.voiceassist} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Main;