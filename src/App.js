import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchingSelector,
} from './selectors/Selector'
import { shape } from './actions'
import Header from './components/Header'
import ShapeList from './components/ShapeList'
import Filters from './components/Filters'

const App = () => {
  const dispatch = useDispatch()
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(shape.request())
  }, [dispatch])

  if (fetching) {
    return <div>loading..</div>
  }

  return (
    <>
      <Header />
      <Filters />
      <ShapeList />
    </>
  )
}

export default App
