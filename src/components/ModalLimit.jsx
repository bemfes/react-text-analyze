import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function ModalLimit() {
  const {setModal, setLimit, limit} = useContext(MyContext)
  return <div className="overlay">
    <div className="modal">
      <div className='modal-content'>
        <button onClick={() => setModal(false)} className="modal-close">&#x2715;</button>
        <p style={{color: 'black'}} className="title-2">Please set the character limit</p>
        <input value={limit} onChange={(e) => setLimit(e.target.value)} className='input' placeholder='character limit' type="number" />
      </div>
    </div>

  </div>
}

export default ModalLimit
