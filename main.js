import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

//call the function to display the products
showProductContainer(products);
