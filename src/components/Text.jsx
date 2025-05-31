import { useContext } from "react"
import { MyContext } from "./ContextProvider"
import Settings from "./Settings"
function Text() {
    const {limit, setModal, excludeSpaces, time, 
    characters, setExcludeSpaces, handleTextChange} = useContext(MyContext)
    return (
    <div>
    <textarea placeholder='Start typing here (or paste your text)' className='textarea' onChange={(e) => handleTextChange(e.target.value, limit)
    } name="" id=""></textarea>
    
    <Settings excludeSpaces={excludeSpaces} setExcludeSpaces={setExcludeSpaces} setModal={setModal} limit={limit} time={time} characters={characters}/>
    </div>
    )
}

export default Text
