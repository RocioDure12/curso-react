import React, { useState } from 'react';

const initialCart = [
    {
        id: 1,
        title: "Moto",
        description: "$150.000"
    },

    {
        id: 2,
        title: "Auto",
        description: "$500.000.000"
    }
];

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart)


    const deleteProduct = (productId) => {
        const changeCart = cart.filter(product => product.id !== productId);
        setCart(changeCart)
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changeCart = [
            newProduct,
            ...cart,

        ];
        setCart(changeCart)
    }

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product =>(
            product.id === editProduct.id
            ? editProduct
            :product
        ))
        setCart(changedCart)


        }
        return (
            <div>

                <h1>Shopping Cart</h1>

                <button onClick={() => addProduct({
                    title: "nuevo titulo",
                    description: "otra descr"
                })}>Añadir producto</button>

                {cart.map(product => (
                    <div key={product.id}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <button onClick={() => deleteProduct(product.id)}>eliminar</button>
                        <button onClick={() => updateProduct({ id: product.id, title: "edit titulo", description: "nuevitadescr" })}>Actualizar</button>

                    </div>
                )

                )}

                <div>{cart}</div>

            </div>
        )
    }

    export default ShoppingCart;