import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchingSelector,
} from '../selectors/Selector'
import { item } from '../actions'
import { LoadingAnimation } from '../components/LoadingAnimation'
import Header from '../components/Header'
import ShapesPanel from '../components/ShapesPanel'
import Filters from '../components/Filters'

export const Container = () => {
  const dispatch = useDispatch()
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(item.requestOne('1'))
  }, [dispatch])

  return fetching
    ? <LoadingAnimation />
    : (
      <>
        <Header />
        <Filters />
        <ShapesPanel />
      </>
  )
}
