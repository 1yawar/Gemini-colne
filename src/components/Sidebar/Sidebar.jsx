import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
function Sidebar() {
  const [extended, setextended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);
  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => setextended((prev) => !prev)}
            className="menu"
            src={assets.menu}
            alt=""
          />
          <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus} alt="add-icone" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index) => {
                return (
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={assets.messege} alt="messege-icone" />
                    <p>{item.slice(0,18)}...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.help} alt="help-icone" />
            {extended ? <p>Help?</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.activity} alt="activity-icone" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.settings} alt="settings-icone" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
