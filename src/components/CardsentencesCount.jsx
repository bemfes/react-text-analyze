import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function CardsentencesCount() {
    const {sentences} = useContext(MyContext)
    return (
       <div className='card card-sentences'><p className='card-text'><span className='card-span'>{sentences ? sentences.length : 0}</span> <br /> sentence count</p></div>
    )
}

export default CardsentencesCount
