import './Home.css'
export const Home = () => {
    return (
        <div>
          <main>
            <section>
              <h2>Produse</h2>
              <div className="product">
                <img src="product1.jpg" alt="Product 1" />
                <h3>Produs 1</h3>
                <p>Descriere</p>
                <button>Add to Cart</button>
              </div>
              <div className="product">
                <img src="product2.jpg" alt="Product 2" />
                <h3>Produs 2</h3>
                <p>Descriere</p>
                <button>Add to Cart</button>
              </div>
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
}