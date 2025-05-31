import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function OverpassLimit() {
  const {setModalLimit, setShowModalLimit, showModalLimit} = useContext(MyContext)
  return <div className="overlay">
  <div className="warning">
    <div className='modal-content'>
      <button onClick={() => setModalLimit(false)} className="modal-close modal-close_warning">&#x2715;</button>
      <p className='warning-text'>The limit was surpassed!</p>
      <button onClick={() => setShowModalLimit(false)} className={`button warning-btn ${showModalLimit ? '' : 'button-check'}`}>Don't show again</button>
    </div>
  </div>
</div>
}


export default OverpassLimit
