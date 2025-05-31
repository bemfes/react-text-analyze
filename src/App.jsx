import { useContext} from 'react'
import Text from './components/Text'
import CardCharactersCount from './components/CardCharactersCount'
import CardWordsCount from './components/CardWordsCount'
import CardsentencesCount from './components/CardsentencesCount'
import LetterDencity from './components/LetterDencity'
import ModalLimit from './components/ModalLimit'
import OverpassLimit from './components/OverpassLimit'

import './index.css'
import { MyContext } from './components/ContextProvider'

function App() {
  const {modal, modalLimit, showModalLimit} = useContext(MyContext)
  return (
      <div className='container'>
        <h1 className='title'>Analyze your text in real time</h1>
        <Text/>
        <div className="cards-box">
          <CardCharactersCount/>
          <CardWordsCount/>
          <CardsentencesCount/>
        </div>
          <LetterDencity/>
          {modal && <ModalLimit/>}
          {modalLimit && showModalLimit && <OverpassLimit/>}
      </div> 
  )
}

export default App
