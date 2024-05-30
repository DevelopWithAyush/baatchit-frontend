import React from 'react'
import "./Message.css"
const Message = (props) => {
    const {message,classs,person} = props 
  return (<><div className={`message ${classs}`}>
        {person}:{message}
    </div>
 
    </>
    
  )
}

export default Message
