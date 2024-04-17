import CustomerReviews from "../components/CustomerReviews";
import PricingGrid from "../components/PricingGrid";
import Subscribe from "../components/Subscribe";



export default function Pricing() {
    return(
        <div className="pricing-page">
            <PricingGrid />
            <CustomerReviews />
            <Subscribe />
        </div>
    )
}
