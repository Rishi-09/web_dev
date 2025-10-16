import './Product.css'

function Product({title,price,features}){
    return (
        <div className='Product' >
            <h3>{title}</h3>
            <p>{title}: Description</p>
            <p>Price:{price}</p>
            {price>20000 && <p>Discount:5%</p>}
            <p>{features.map((feature)=><li>{feature}</li>)}</p>
        </div>
    )
}

export default Product;