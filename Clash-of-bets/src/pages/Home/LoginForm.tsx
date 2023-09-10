import React, { useState } from "react";
import { login } from '../../services/clash-of-bets/user';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Accédez aux valeurs des champs du formulaire à partir de l'état formData
    const { email, password } = formData;
  
    // Faites quelque chose avec email et password, par exemple, imprimez-les dans la console
    console.log("Tentative de connexion avec email : " + email);
    const response = await login(formData)
    console.log("ici la response au login "+response)
    localStorage.setItem("token", response);

    // Ici la suite appel axios jwt token 
  }

  const handleInputChange = (e) => {
    // Mettez à jour l'état formData avec les nouvelles valeurs lorsqu'un champ d'entrée change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Utilisez le nom du champ comme clé pour mettre à jour la valeur correspondante
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Adresse e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter email"
          value={formData.email} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Password"
          value={formData.password} // Liez la valeur du champ à l'état formData
          onChange={handleInputChange} // Utilisez le gestionnaire onChange pour mettre à jour l'état
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck"
        />
        <label className="form-check-label" htmlFor="exampleCheck">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
