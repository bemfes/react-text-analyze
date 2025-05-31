
function LetterItem({letter, dencity, text}) {
  const textWithoutSpaces = text.match(/\p{L}/gu) || ['0']
  return <div className="letter-item">
    <p className='letter'>{letter.toUpperCase()}</p>
    <div className="progress-box">
      <div style={{width: `${(dencity.length * 100 / textWithoutSpaces.length).toFixed(2)}%`}} className="progress"></div>
    </div>
    <p className='percents'>{dencity.length} ({(dencity.length * 100 / textWithoutSpaces.length).toFixed(2)}%)</p>
  </div>
}

export default LetterItem
