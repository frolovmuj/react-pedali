
import PreloadCard from '../PreloadCard/PreloadCard'

const PreloadCards = () => {
  const cards: any = []
  const addPreloadCards = () => {
    for (let i = 0; i < 20; i++){
      cards.push(<PreloadCard key={i} />)
    }
  }
  addPreloadCards()
  return (
    <>
      {cards}
    </>
    
  )
}

export default PreloadCards