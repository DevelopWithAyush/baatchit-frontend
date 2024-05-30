import { createContext,useState } from "react";

export const AlertContext = createContext()

const AlertState = (props) => {
    const [alert,setAlert] = useState({bottom:"-100%"})
    const [alertdet,setAlertdet] = useState("")
    const showAlert = (message)=>{
        setAlert({bottom:"5%"})
        setAlertdet(message)
        setTimeout(() => {
            setAlert({bottom:"-100%"})
        }, 3000);
    }
  return (
    <AlertContext.Provider value={{alert,setAlert ,alertdet,setAlertdet ,showAlert}} >
        {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
