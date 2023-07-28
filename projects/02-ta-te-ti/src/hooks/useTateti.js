import confetti from 'canvas-confetti'
import { useState } from 'react'
import { TURNS } from '../constants'
import { useLocalStorage } from './useLocalStorage'
import { checkEndGame, checkWinner } from '../logic/board'

export function useTaTeTi() {
  const [board, saveBoard, clearBoard] = useLocalStorage('board', Array(9).fill(null))
  const [turn, saveTurn, clearTurn] = useLocalStorage('turn', TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return
    if (winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    saveBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    saveTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Draw
    }
  }

  const resetGame = () => {
    saveBoard(Array(9).fill(null))
    saveTurn(TURNS.X)
    setWinner(null)
    clearBoard()
    clearTurn()
  }

  return { board, turn, winner, updateBoard, resetGame }
}
