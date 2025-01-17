import React from 'react'
import MyProvider from './contectApi/MyProvider'
import MyComponent from './contectApi/MyComponent'

function ContextAPI() {
  return (
    <MyProvider>
        <MyComponent/>
    </MyProvider>
  )
}

export default ContextAPI