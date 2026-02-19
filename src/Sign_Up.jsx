import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Sign_Up() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://amazing-big-spider.ngrok-free.app/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: formData }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <h2 style={styles.title}>Join Us ✨</h2>
        <p style={styles.subtitle}>Create an account to get started</p>
        
        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={status === 'loading'} style={styles.button}>
            {status === 'loading' ? 'Processing...' : 'Sign Up 🚀'}
          </button>
        </form>

        {status === 'success' && <p style={styles.successMsg}>✨ Account created! Redirecting...</p>}
        {status === 'error' && <p style={styles.errorMsg}>❌ Error creating account.</p>}
        
        <p style={styles.footerText}>
          Already have an account? <Link to="/login" style={styles.link}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Colorful background
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '40px', borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)', width: '100%', maxWidth: '400px', textAlign: 'center',
    backdropFilter: 'blur(10px)'
  },
  title: { margin: '0 0 5px 0', color: '#333', fontSize: '28px', fontWeight: 'bold' },
  subtitle: { color: '#666', marginBottom: '25px', fontSize: '14px' },
  inputGroup: { textAlign: 'left', marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '14px' },
  input: { width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #eee', fontSize: '16px', boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.3s' },
  button: {
    width: '100%', padding: '14px', border: 'none', borderRadius: '10px',
    background: 'linear-gradient(to right, #ff416c, #ff4b2b)', // Vibrant button
    color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px',
    boxShadow: '0 4px 15px rgba(255, 65, 108, 0.4)'
  },
  successMsg: { color: '#2ecc71', marginTop: '15px', fontWeight: 'bold' },
  errorMsg: { color: '#e74c3c', marginTop: '15px', fontWeight: 'bold' },
  footerText: { marginTop: '20px', fontSize: '14px', color: '#555' },
  link: { color: '#764ba2', fontWeight: 'bold', textDecoration: 'none' }
};

export default Sign_Up;