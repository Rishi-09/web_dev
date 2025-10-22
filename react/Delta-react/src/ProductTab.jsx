import Product from "./Product.jsx";
import  "./ProductTab.css"
function ProductTab(){
    let prod1 = {title:"Realme GT 6T", headLine1:"SnapDragon 7 Gen 3", headLine2:"5500mAh with 120W",oldPrice:30000,newPrice:27999};
    let prod2 = {title:"Targus AMW600", headLine1:"Smooth Experience", headLine2:"Works On any Surface ",oldPrice:899,newPrice:599};
    let prod3 = {title:"Ant Esports MK1700", headLine1:"Membrane Keyboard", headLine2:"RGB light",oldPrice:799,newPrice:499};
    let prod4 = {title:"HP-15s", headLine1:"AMD Ryzen 3 5000 Series", headLine2:"AMD Radeon Graphics",oldPrice:45000,newPrice:39000};
    return (
            <div className="productTab">
                <Product prod={prod1} />
                <Product prod={prod2} />
                <Product prod={prod3} />
                <Product prod={prod4} /> 
            </div>
    )
}

export default ProductTab;