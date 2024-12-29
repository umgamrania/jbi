import { useParams } from "react-router-dom"
import "../styles/product.css"
import productsJson from "./ProductsJson"
import logo from "../assets/logo.png"

export default function Product() {
    const { productName } = useParams()
    const product = productsJson.find(product => product.path == productName)
    
    return <>
        <div className="product-container">
            <div className="image">
                <img src={product ? `/product-images/${product.path}.png`: logo}/>
            </div>
            <div className="desc">
                <h1>{product ? product.title : "Oops! Product not found"}</h1>
                <p>{product ? product.abstract : "Looks like there was typing mistake. The product " + productName + " could not be found!"}</p>
            </div>
        </div>
    </>
}