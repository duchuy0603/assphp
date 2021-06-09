import React from 'react'
import Headeradmin from '../components/Headeradmin'
import Header from '../components/Header'
const AdminLayout = ({ children }) => {
    return (
        <div>
           <Header/>
            <div className="mt-5">
     
                {children}
            </div>
        </div>
    )
}

export default AdminLayout
