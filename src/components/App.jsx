import React from "react"

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import FloatingButton from './FloatingButton/FloatingButton'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
                <FloatingButton />
            </div>
        )
    }
}