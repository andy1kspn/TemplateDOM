import { useState } from 'react';
import './Register.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        birthdate: '',
        country: '',
        sex: 'male' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Datele au fost trimise cu succes!');
            } else {
                console.error('A apărut o eroare la trimiterea datelor.');
            }
        } catch (error) {
            console.error('A apărut o eroare la trimiterea datelor:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pagina de înregistrare!</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label>
                        Nume:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Introdu numele"
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Introdu emailul"
                        />
                    </label>
                    <br />
                    <label>
                        Parolă:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Introdu parola"
                        />
                    </label>
                    <br />
                    <label>
                        Data de naștere:
                        <input
                            type="date"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Țara:
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Introdu țara"
                        />
                    </label>
                    <br />
                    <label>
                        Sex:
                        <select name="sex" value={formData.sex} onChange={handleChange}>
                            <option value="male">Masculin</option>
                            <option value="female">Feminin</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Trimite Datele</button>
                </form>
            </header>
        </div>
    );
};
