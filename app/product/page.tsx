import React from 'react'
import ProductsPage from './ProductsPage'
import SectionCTA from '../Main/SectionCTA'
import BrandCTA from '../Main/BrandCTA'

const page = () => {
    return (
        <>
            <main className="min-h-screen">
                <ProductsPage />
                {/* <SectionCTA /> */}
                <BrandCTA />
            </main>
        </>
    )
}

export default page