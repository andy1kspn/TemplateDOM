import React, { useState, useEffect } from 'react';

export const ProductForm = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: ''
    });

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
                console.error('Eroare la aducerea produselor:', response.status);
            }
        } catch (error) {
            console.error('Eroare la aducerea produselor:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddProduct = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Produs adăugat cu succes!');
                setFormData({
                    name: '',
                    description: '',
                    imageUrl: ''
                });
                fetchProducts(); 
            } else {
                console.error('Eroare la adăugarea produsului:', response.status);
            }
        } catch (error) {
            console.error('Eroare la adăugarea produsului:', error);
        }
    };

    const handleUpdateProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Produsul a fost actualizat cu succes!');
                fetchProducts(); 
            } else {
                console.error('Eroare la actualizarea produsului:', response.status);
            }
        } catch (error) {
            console.error('Eroare la actualizarea produsului:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log('Produsul a fost șters cu succes!');
                fetchProducts();
            } else {
                console.error('Eroare la ștergerea produsului:', response.status);
            }
        } catch (error) {
            console.error('Eroare la ștergerea produsului:', error);
        }
    };

    return (
        <div>
            <h2>Adaugă/Actualizează Produs</h2>
            <form onSubmit={handleAddProduct}>
                <label>
                    Nume:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Descriere:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    URL Imagine:
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Adaugă Produs</button>
            </form>
            
            <h2>Produse</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>
                            <strong>Nume: </strong>{product.name}<br />
                            <strong>Descriere: </strong>{product.description}<br />
                            <strong>URL Imagine: </strong>{product.imageUrl}<br />
                            <button onClick={() => handleUpdateProduct(product.id)}>Actualizează Produs</button>
                            <button onClick={() => handleDeleteProduct(product.id)}>Șterge Produs</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
