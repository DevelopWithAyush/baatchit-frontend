import React, { useContext, useEffect, useMemo, useState } from 'react'
import "./Chat.css"
import { Link } from 'react-router-dom'
import ScrollToBottom  from "react-scroll-to-bottom"
import Deco from '../../Components/Deco/Deco'
import { user } from "../Login/Login"
import { io } from "socket.io-client"
import { AlertContext } from '../../Context/Alertcontext/AlertState'
import Message from '../../Components/Message/Message'
const Chat = () => {
  const context = useContext(AlertContext)
  const { showAlert } = context
  const [sendmessage, setSendmessage] = useState()
  const [id ,setId] = useState('')
  const [recivedmessage, setRecivedmessage] = useState([])

  const socket = useMemo(() => io("https://baatchit-backend.vercel.app/"), [])

  const hnadlesendmessage =()=>{
    socket.emit("send",{sendmessage,id})   
    setSendmessage("")
   }
  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id)
      // alert(`${user} connnected`)
    })

    socket.emit("joined", { user }) // yaha pe hum vo user send ker rahe hai jo aaya hai 
    socket.on("Welcome", (data) => {
      showAlert(data.message)
    })
    socket.on("userJoined", (data) => {
      showAlert(data.Message)
    })
    socket.on('leave', (leave) => {
      showAlert(leave.message)
    })

   

 
    return () => {

    }

    // eslint-disable-next-line
  }, [])

  useEffect(()=>{
    socket.on("recivemessage", (data) => {
      setRecivedmessage([...recivedmessage,data])
    })
    return()=>{

    }

  },[recivedmessage])

  return (<>
    <Deco />
    <div className='chat-pages'>
      <div className="chatbox">
        <div className="head">
          <div className="bubble chathead">baat-chit</div>
         <Link to ="/"><i class="fa-solid fa-x"></i> </Link> 
        </div>
        <ScrollToBottom className="messagebox">
          {recivedmessage.map((item)=>{
            return <Message key ={item.id} message={item.recivemessage} classs ={`${item.id === id?"right":"left"}`} person = {`${item.user === user?"you":item.user}`} />
          })}
        
       
        </ScrollToBottom>
        <div className="inputbox">
          <input type="text" placeholder={`${user} type your message here`} onChange={(e) => {
            setSendmessage(e.target.value)
          }} value={sendmessage} />
          <button onClick={hnadlesendmessage} className='messagebtn'><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Chat
