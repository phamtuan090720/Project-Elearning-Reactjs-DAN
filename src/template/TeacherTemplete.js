import React from 'react'
import { Route } from 'react-router'
import LayoutTeacher from '../layout/LayoutTeacher.js'

export default function TeacherTemplate({ Component, ...props }) {
  return (
    <Route {...props}
      render={(propsComponent) => (
        <LayoutTeacher>
          <Component {...propsComponent} />
        </LayoutTeacher>
      )}
    />
  )
}
