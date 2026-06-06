import ProductsPage from './ProductsPage'
import BrandCTA from '../Main/BrandCTA'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
    title: "Product Range",
    description:
        "Browse FUDDLR's wholesale pet product range, grouped by category and brand for easier retail ordering.",
    path: "/product",
});

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
