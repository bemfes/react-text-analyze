import { useContext } from "react"
import { MyContext } from "./ContextProvider"

function CardCharactersCount() {
    const {characters} = useContext(MyContext)
    return (
        <div className='card card-characters'><p className='card-text'><span className='card-span'>{characters}</span> <br /> total characters</p></div>
    )
}

export default CardCharactersCount
