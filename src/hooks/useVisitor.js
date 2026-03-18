import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useVisitor() {
  const location = useLocation()
  const [visitorName, setVisitorName] = useState('')
  const [modalDone, setModalDone] = useState(false)

  // Check if direct link visit
  const pathname = location.pathname
  const isDirectVisit = pathname !== '/'
  const targetPath = pathname

  // Check if already visited this session
  useEffect(() => {
    const name = sessionStorage.getItem('visitor_name')
    if (name) {
      setVisitorName(name)
      setModalDone(true)
    }
  }, [])

  const saveName = (name) => {
    sessionStorage.setItem('visitor_name', name)
    setVisitorName(name)
  }

  return { visitorName, saveName, modalDone, setModalDone, isDirectVisit, targetPath }
}