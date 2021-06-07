import axious from "axios"

export default class ProductService{
   getProducts(){
       return axious.get("http://localhost:8080/api/products/getall")
   }
     
}