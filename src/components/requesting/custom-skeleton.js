import React from 'react'
import { useSelector } from 'react-redux'
import { selectRequesting } from '../../store/requesting/requesting-selector'

export const CustomSkeleton = ({ children, loaderComponent, actions }) => {
  const isRequesting = useSelector(state => selectRequesting(state, [...actions]))
  return <>{!isRequesting ? children : loaderComponent}</>
}
