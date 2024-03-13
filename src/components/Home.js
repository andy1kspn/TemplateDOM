import React, { useState, useEffect } from 'react';
import './Home.css';

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <main>
                <section>
                    <h2>Produse</h2>
                    {products.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </section>
                <section>
                    <h2>About Us</h2>
                    <p>Welcome to Our Webstore. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Spinu Andrei. All rights reserved.</p>
            </footer>
        </div>
    );
};
