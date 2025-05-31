import { createContext, useState } from 'react' 

export const MyContext = createContext()

function ContextProvider({children}) {

  const [text, setText] = useState('')
  const [characters, setCharacters] = useState(0)
  const [words, setWords] = useState(0)
  const [time, setTime] = useState(0)
  const [sentences, setSentences] = useState(0)
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [letters, setLetters] = useState([])
  const [limit, setLimit] = useState()
  const [modalLimit, setModalLimit] = useState(false)
  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(false)
  const [sliceNumbers, setSliceNumbers] = useState(5)
  const [showModalLimit, setShowModalLimit] = useState(true)

  function wordCount(text) {
    const amount = text.split(' ')
    const words = amount.filter(el => {
      return (/\p{L}/u).test(el)
    })
    setWords(words)
    readingTime(words)
    
  }
  function readingTime(words) {
    const read = Math.floor(words.length / 140)
    setTime(read)
  }
  function sentenceCount(text) {
    const replace = text.replace(/\p{L}\.\p{L}/gu, 'a')
    const countSentences = replace.match(/\p{L}[\.!?]/gu)
    setSentences(countSentences)

  }
  function characterCount(text) {
    if (text === '') {
      setCharacters(0)
    }
    if (excludeSpaces) {
      const without = text.match(/\S/g)
      if (without) {
        setCharacters(without.length)
      }
    } else {
      setCharacters(text.length)
    }
  }
  function dencity(text) {
    if (!/\p{L}/gu.test(text)) {
      setLetters([])
    }
    const letters = text.match(/\p{L}/gu)
    
    if (letters) {
      const arrletters = new Set(letters.map(el => {
        return el.toUpperCase()
      }))
      setLetters(Array.from(arrletters))
    } else setShow(false)
    
  }
  function wordLimit(text, limit) {
    if (limit) {
      if (text.length > limit) {
        setModalLimit(true)
      }
    }
  }
function handleTextChange(text, limit) {
    setText(text)
    wordCount(text)
    sentenceCount(text)
    characterCount(text)
    dencity(text)
    wordLimit(text, limit)
}
  return (
    <MyContext.Provider value={{text, setText, characters, setCharacters, words, setWords, excludeSpaces, setExcludeSpaces,
      time, setTime, sentences, setSentences, letters, setLetters, limit, setLimit, modal, setModal, modalLimit, setModalLimit,
      show, setShow, showModalLimit, setShowModalLimit, sliceNumbers, setSliceNumbers, handleTextChange
    }}>{children}</MyContext.Provider>
  )
}


export default ContextProvider

