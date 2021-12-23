export default class ProductsApi{
    // static apiBase = `https://scandi-app.000webhostapp.com/api`; //real api base
    static apiBase = `http://scandi-api.test/api`; //local api base
    static accessApi = async(url_partial, requestMethod, params=false) =>{
        const fullUrl = `${ProductsApi.apiBase}/${url_partial}`;
        let response;
        if(requestMethod!=="GET"&&params){
            response = await fetch(fullUrl, {
                method: requestMethod, 
                body: JSON.stringify(params),
            });
        }
        else response = await fetch(fullUrl);
        if(!response.ok)  throw new Error(`Could not fetch ${fullUrl} received ${response.status}`);
        else return await response.json();
    }
    static async store(product){
        return await ProductsApi.accessApi("products/store", "POST", product);
    }
    static async all(){
        return await ProductsApi.accessApi("products", "GET");
    }
    static async getTypes(){
        return await ProductsApi.accessApi("product-types", "GET");
    }
    static async getSpecAttr(type){
        return await ProductsApi.accessApi(`spec-attrs/${type}`, "GET");
    }
    static async delete(params){
        return await ProductsApi.accessApi("products/delete", "DELETE", params);
    }
}