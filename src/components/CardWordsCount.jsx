import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function CardWordsCount() {
    const {words} = useContext(MyContext)
    return (
        <div className='card card-words'><p className='card-text'><span className='card-span'>{words.length ? words.length : 0}</span> <br /> word count</p></div>
    )
}

export default CardWordsCount
