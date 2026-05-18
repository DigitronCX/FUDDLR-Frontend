import React from 'react'
import ProductsPage from './ProductsPage'
import SectionCTA from '../Main/SectionCTA'

const page = () => {
    return (
        <>
            <main className="min-h-screen">
                <ProductsPage />
                <SectionCTA />
            </main>
        </>
    )
}

export default page