import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const WebsiteLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="mt-5">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default WebsiteLayout
