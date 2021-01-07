import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchingSelector,
} from './selectors/Selector'
import { shape } from './actions'
import Header from './components/Header'
import ShapesPanel from './components/ShapesPanel'
import Filters from './components/Filters'

const App = () => {
  const dispatch = useDispatch()
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(shape.request())
  }, [dispatch])

  return fetching
    ? <div>loading..</div>
    : (
      <>
        <Header />
        <Filters />
        <ShapesPanel />
      </>
  )
}

export default App
