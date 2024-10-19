import { CategoriesSelection } from "../component/storefront/CategorySelection";
import { FeaturedProducts } from "../component/storefront/FeaturedProducts";
import { Hero } from "../component/storefront/Hero";

export default function IndexPage() {
    return(
        <div>
            <Hero />
            <CategoriesSelection />
            <FeaturedProducts />
        </div>
    )
}