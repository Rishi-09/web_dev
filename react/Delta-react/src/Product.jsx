import Price from './Price.jsx';
import Content from './Content.jsx'
import './Product.css'

function Product({prod}){
    return (
        <div className='Product' >
            <Content title={prod.title} headLine1={prod.headLine1} headLine2={prod.headLine2} />
            <Price oldPrice={prod.oldPrice} newPrice={prod.newPrice} />
        </div>
    )
}

export default Product;