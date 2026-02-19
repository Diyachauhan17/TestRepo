import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle');

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://amazing-big-spider.ngrok-free.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        setStatus('success');
        setTimeout(() => navigate('/dashboard'), 1000);
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
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Log in to access your dashboard</p>

        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" name="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} required />
          </div>
          <button type="submit" disabled={status === 'loading'} style={styles.button}>
            {status === 'loading' ? 'Logging in...' : 'Log In 🚀'}
          </button>
        </form>

        {status === 'error' && <p style={styles.errorMsg}>❌ Invalid Email or Password</p>}

        <p style={styles.footerText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
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
  input: { width: '100%', padding: '12px 15px', borderRadius: '10px', border: '2px solid #eee', fontSize: '16px', boxSizing: 'border-box', outline: 'none' },
  button: {
    width: '100%', padding: '14px', border: 'none', borderRadius: '10px',
    background: 'linear-gradient(to right, #ff416c, #ff4b2b)', 
    color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px',
    boxShadow: '0 4px 15px rgba(255, 65, 108, 0.4)'
  },
  errorMsg: { color: '#e74c3c', marginTop: '15px', fontWeight: 'bold' },
  footerText: { marginTop: '20px', fontSize: '14px', color: '#555' },
  link: { color: '#764ba2', fontWeight: 'bold', textDecoration: 'none' }
};

export default Login;