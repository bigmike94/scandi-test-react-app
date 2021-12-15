import React, {useState, useEffect} from 'react';
import Header from '../Header';
import Products from '../Products';
import AddProduct from '../AddProduct';
import Product from '../Services/Product';
import ProductsApi from '../Services/ProductsApi';
import './app.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  const product = new Product();
  const [products, setProducts] = useState(null);
  const [changed, setChanged] = useState(false);
  
//loads data again if items deleted or added
  const loadProducts = ()=>{
    ProductsApi.all().then(res=>{
        setProducts(res.data);
        setChanged(false);
      }
    );
  };

  useEffect(() => {
    loadProducts();
  },[]);
  return (
    <React.Fragment>
        <Router>
              <Routes>
                <Route exact path="/" element={
                        <React.Fragment>
                          <Header headerText="Products List" navText={["ADD", "MASS DELETE"]} 
                              onDeleteChecked={async()=>{
                                const deleted = await product.delete();
                                if(deleted) loadProducts();
                              }}/>
                          <Products products={products}/>
                        </React.Fragment>
                } />
                <Route exact path="/add-product" element={
                        <React.Fragment>
                          <Header headerText="Products Add" navText={["Save", "Cancel"]} 
                                  onProductSave={async()=>{
                                    const saved = await product.save();
                                    if(saved) {
                                      setChanged(true);
                                      loadProducts();
                                    }
                                  }}/>
                          <AddProduct changed={changed}/>
                        </React.Fragment>
                }/>
              </Routes>
        </Router>
        <h4>Scandiweb Test assignment</h4>
    </React.Fragment>
  );
}
export default App;