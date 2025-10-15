import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
            <Product title="phone"     price={20000}   features={["hi-tech","durable"]} />
            <Product title="tablet"    price={25000}   features={["hi-tech","durable"]} />
            <Product title="Computer"  price={100000}  features={["hi-tech","durable"]}  />
        </>
    )
}

export default ProductTab;