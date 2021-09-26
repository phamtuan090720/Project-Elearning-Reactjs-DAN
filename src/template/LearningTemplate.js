import React from 'react'
import { Route } from 'react-router'
import LayoutLearning from '../layout/LayoutLearning'
export default function LearningTemplate({Component, ...props}) {
    return (
        <Route {...props}
            render={(propsComponent) => (
                <LayoutLearning>
                    <Component {...propsComponent} />
                </LayoutLearning>
            )}
        />
    )
}
