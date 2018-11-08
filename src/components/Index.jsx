import React from "react"

import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}