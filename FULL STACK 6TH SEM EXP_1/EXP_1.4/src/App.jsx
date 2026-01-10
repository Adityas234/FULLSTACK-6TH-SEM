import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Store input using state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    profession: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      setSubmittedData(formData);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <div className="form-header">
          <h2>Experiment-4</h2>
          <p>Simple Form SPA Implementation</p>
        </div>

        {/* 2. Create form fields */}
        <form onSubmit={handleSubmit} className="modern-form">
          <div className="field-row">
            <div className="input-box">
              <label>Full Name</label>
              <input 
                type="text" name="username" placeholder="John Doe"
                value={formData.username} onChange={handleChange} required 
              />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input 
                type="email" name="email" placeholder="john@example.com"
                value={formData.email} onChange={handleChange} required 
              />
            </div>
          </div>

          <div className="input-box">
            <label>Profession</label>
            <select name="profession" value={formData.profession} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <div className="input-box">
            <label>Message</label>
            <textarea 
              name="message" placeholder="Tell us something..."
              value={formData.message} onChange={handleChange} required 
            />
          </div>

          <button type="submit" className="submit-btn">
            {isSubmitting ? 'Processing...' : 'Submit Form'}
          </button>
        </form>

        {/* 3. Display submitted data */}
        {submittedData && (
          <div className="result-container">
            <h3>Submission Received! ✅</h3>
            <div className="result-grid">
              <div className="result-item"><span>Name:</span> {submittedData.username}</div>
              <div className="result-item"><span>Email:</span> {submittedData.email}</div>
              <div className="result-item"><span>Role:</span> {submittedData.profession}</div>
              <div className="result-item"><span>Msg:</span> {submittedData.message}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;