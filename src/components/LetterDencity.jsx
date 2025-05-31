import { useContext } from "react"
import LetterItem from "./LetterItem"
import { MyContext } from "./ContextProvider"

function LetterDencity() {
  const {letters, text, sliceNumbers, setSliceNumbers, setShow, show} = useContext(MyContext)
  const textArr = text.split('')
  const arr = letters.map(el => {
    return textArr.filter(item => {
      return item.toUpperCase() === el || item.toLowerCase() === el
    })
  })
  const sorted = [...arr].sort((a, b) => b.length - a.length)

  return <div className="">
    <h2 className='title-2'>Letter dencity</h2>
    {letters.length !== 0 && text !== '' ? <div><div className="letters-box">
    {sorted.slice(0, sliceNumbers).map(item => {
      return <LetterItem key={item} text={text} dencity={item} letter={item[0]}/>
    })}
    
    </div> 
    {sorted.length > 5 && <button className={`see-more ${show ? 'hide' : ''}`} onClick={() => {
      if (sliceNumbers === sorted.length) {
        setSliceNumbers(5)
      } else setSliceNumbers(sorted.length)
      
      setShow(prev => !prev)
      
    }}>{show ? 'Hide' : 'See more'}</button>}
    </div>
    : <p className='no-letters'>No letters found. Start typing to see letter dencity</p>}
    
  </div>
}

export default LetterDencity
