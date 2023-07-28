import { useEffect } from 'react'
import { usePointerMove } from '../hooks/usePointerMove'

export function MouseFollower() {
  const { enabled, toggleEnable, position } = usePointerMove()

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => document.body.classList.remove('no-cursor')
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button style={{ cursor: enabled ? 'none' : 'pointer' }} onClick={toggleEnable}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}
