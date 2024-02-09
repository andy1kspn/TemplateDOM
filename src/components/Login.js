import './Login.css';
export const Login = () => {
    return(
        <div className="App">
        <header className="App-header">
          <h1>Pagina de inregistrare!</h1>
          <div className="form-container">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </label>
            <br />
            <label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </label>
            <br />
            <button>Send Data</button>
          </div>
        </header>
      </div>
          );
}