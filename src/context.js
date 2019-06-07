import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state={
        products: [],
        detailProduct:{},
        cart:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,

    };

    //Method gets the item according to id
    //getItem, handleDetail and addToCart for each product array
    getItem =(id)=>{
        //finds the item where item.id = id
        const product = this.state.products.find(item => item.id===id);
        return product;
    };

    handleDetail=(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };

    addToCart=(id)=>{
        let tempProduct =[...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total= price;
        this.setState(()=>{
                return {product:tempProduct, cart:[...this.state.cart,product]}
            },
            ()=>{
                this.addTotals()
            })
    };
    //set product from server via api call
    setProduct=()=>{
        axios.get('https://ego3z40gfe.execute-api.eu-north-1.amazonaws.com/default/items',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET'
                }
            }).then(resp => {
            this.setState({
                products:resp.data.Items
            });
        })
            .catch(error => {
                //this.setState({message: error.toString()});
                console.log(error)
            });

    };
    componentDidMount() {
        this.setProduct();
    }
    increment =(id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count +1;
        product.total= product.count * product.price;

        this.setState(()=>{
            return {cart:[...tempCart]}
        },()=>{this.addTotals()})

    };
    decrement =(id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count-1;
        if (product.count===0){
            this.removeItem(id);
        }
        else {
            product.total=product.count * product.price;
            this.setState(()=>{
                return {cart:[...tempCart]}
            },()=>{this.addTotals()})
        }
    };
    removeItem=(id)=>{
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];

        //refresh cart
        tempCart=tempCart.filter(item=>item.id!==id);

        //for product
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProduct = tempProduct[index];
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;

        this.setState(()=>{
            return {
                cart: [...tempCart],
                products:[...tempProduct]
            }
        },()=> {
            this.addTotals();
        })
    };
    clearCart =()=>{
        this.setState(()=>{
            return {cart:[]};
        },()=>{
            this.setProduct();
            this.addTotals();
        })
    };
    addTotals=()=>{
        let subTotal=0;
        this.state.cart.map(item=>(subTotal+=item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    };

    render() {
        return(
            <ProductContext.Provider value={{
                //takes all from the state
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};