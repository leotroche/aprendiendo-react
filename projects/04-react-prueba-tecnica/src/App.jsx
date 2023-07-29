import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imgageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>CAT APP</h1>
      <button onClick={refreshFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imgageUrl && (
        <img src={imgageUrl} alt={`Image extracted using first three words for ${fact}`} />
      )}
    </main>
  )
}
