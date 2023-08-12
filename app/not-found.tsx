'use client'
import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, there is nothing to see here</p>
      <p>
        Use the search box or the links below to explore our amazing
        application
      </p>
    </div>
  )
}

export default NotFound