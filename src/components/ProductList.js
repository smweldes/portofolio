import React from 'react'
import Product from './Product';
import './main.css';
import {products} from '../data'

function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create and inspire. Its's Lama</h1>
                <p className="pl-desc">
                The Mitchell-Lama program provides affordable rental and 
                cooperative housing to moderate- and middle-income families. 
                The program was sponsored by New York State Senator MacNeil 
                Mitchell and Assemblyman Alfred Lama, and was signed into law 
                in 1955.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
               
               
            </div>
            
        </div>
    )
}

export default ProductList
