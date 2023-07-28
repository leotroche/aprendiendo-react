import { Square, WinnerModal } from './components'
import { TURNS } from './constants'
import { useTaTeTi } from './hooks/useTateti'

export function App() {
  const { board, turn, winner, updateBoard, resetGame } = useTaTeTi()

  return (
    <main className='board'>
      <h1>TA TE TI</h1>
      <button onClick={resetGame}>RESET GAME</button>

      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
