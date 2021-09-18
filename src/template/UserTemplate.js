import React from 'react'
import { Route } from 'react-router'
import LayoutUser from '../layout/LayoutUser'

export default function UserTemplate({Component, ...props}) {
    return (
        <Route {...props}
         render={(propsComponent) => (
            <LayoutUser>
              <Component {...propsComponent} />
            </LayoutUser>
          )}
         />
    )
}
