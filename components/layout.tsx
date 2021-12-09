import React, { ReactElement ,ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

interface Props {
    children:ReactNode
}

export default function Layout({children}: Props): ReactElement {
    return (
        <>
          <Header/>
          <main>
              {children}
          </main>
          <Footer/> 
        </>
    )
}
