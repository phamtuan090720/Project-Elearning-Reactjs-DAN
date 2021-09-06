import React from 'react'
import { Route } from 'react-router'
import LayoutHome from '../layout/LayoutHome'

export default function HomeTemplate({Component, ...props}) {
    return (
        <Route {...props}
         render={(propsComponent) => (
            <LayoutHome>
              <Component {...propsComponent} />
            </LayoutHome>
          )}
         />
    )
}
