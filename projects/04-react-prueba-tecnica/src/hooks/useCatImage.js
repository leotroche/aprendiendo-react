import { useEffect, useState } from 'react'
import { getCatImage } from '../services/getCatImage'

export function useCatImage({ fact }) {
  const [imgageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstThreeWord = fact.split(' ', 3).join(' ')
    getCatImage(firstThreeWord).then((data) => {
      console.log(data)
      setImageUrl(data)
    })
  }, [fact])

  return { imgageUrl }
}
