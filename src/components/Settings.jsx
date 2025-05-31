import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function Settings() {
    const {excludeSpaces, setExcludeSpaces, setModal, limit, time, characters} = useContext(MyContext)
    return (
        <div className='settings'>
      <div className='btns'>
        <button className={`button ${excludeSpaces ? 'button-check' : ''}`} onClick={() => setExcludeSpaces(prev => !prev)}>Exclude spaces</button>
        <button onClick={() => setModal(true)} className={`button ${limit ? 'button-check' : ''}`} >Set character limit {limit ? `(${limit})` : ''}</button>
      </div>
      <p className='time'>approximate reading time: {time < 1 && characters >= 1 ? '< 1 min' : `${time} min`}</p>
    </div>
    )
}

export default Settings
