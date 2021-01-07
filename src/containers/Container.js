import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchingSelector,
} from '../selectors/Selector'
import { item } from '../actions'
import Header from '../components/Header'
import ShapesPanel from '../components/ShapesPanel'
import Filters from '../components/Filters'

export const Container = () => {
  const dispatch = useDispatch()
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(item.request())
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
