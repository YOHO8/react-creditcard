import React, { useState } from 'react';
import './App.css';

interface FormData {
  creditCard: string;
  cvc: string;
  expires: string;
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    creditCard: '',
    cvc: '',
    expires: '',
  });

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleFormClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="menu-container">
            <button className="menu-btn" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </button>
            {showMenu && (
              <div className="menu-content">
                <h2>Menu</h2>
                <p>This is menu content</p>
              </div>
            )}
          </div>
          <h1>My App</h1>
          <div className="form-container">
            <button className="form-btn" onClick={handleFormClick}>
              <i className="fa fa-arrow-left"></i>
            </button>
            {showForm ? (
              <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register card form</h2>
                <p>Welcome {formData.creditCard && formData.creditCard.split(' ')[0]}</p>
                <div className="form-group">
                  <label htmlFor="creditCard">Credit Card</label>
                  <input
                    type="text"
                    name="creditCard"
                    id="creditCard"
                    value={formData.creditCard}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expires">Expires</label>
                  <input
                    type="text"
                    name="expires"
                    id="expires"
                    value={formData.expires}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={!formData.creditCard || !formData.cvc || !formData.expires}>
                  Submit
                </button>
              </form>
            ) : (
              <div className="placeholder"></div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
