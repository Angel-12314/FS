import { useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(state=>state)
    console.log(products)
    return(
        <div>
            <h2>Products</h2>
            {products.map(product=><li><a href={`product/${product.name}`}>{product.name}</a></li>)}
        </div>
    );
}

export default Products;