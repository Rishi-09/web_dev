import Product from "./Product.jsx";

function ProductTab(){
    let options=["hi-tech","durable"];
    return (
        <>
            <Product title="phone"     price={20000}   features={options} />
            <Product title="tablet"    price={25000}   features={options} />
            <Product title="Computer"  price={100000}  features={options}  />
        </>
    )
}

export default ProductTab;