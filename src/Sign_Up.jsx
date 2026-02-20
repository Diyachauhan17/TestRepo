import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Sign_Up() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setStatus("loading");

      try {
        const response = await axios.post(
          "https://amazing-big-spider.ngrok-free.app/signup",
          { user: values },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200 || response.status === 201) {
          setStatus("success");

          // Redirect to login page
          setTimeout(() => navigate("/login"), 1200);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    },
  });

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>
            Get started with your free account
          </p>
        </div>

        {/* ✅ Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="e.g. Diya"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div style={styles.errorText}>
                {formik.errors.name}
              </div>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={styles.errorText}>
                {formik.errors.email}
              </div>
            )}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Create a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={styles.errorText}>
                {formik.errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            style={styles.button}
          >
            {status === "loading" ? "Setting up..." : "Sign Up"}
          </button>
        </form>

        {status === "success" && (
          <div style={styles.successBox}>
            Account created successfully! Redirecting to login...
          </div>
        )}

        {status === "error" && (
          <div style={styles.errorBox}>
            Error creating account. Please try again.
          </div>
        )}

        <div style={styles.divider}></div>

        <p style={styles.footerText}>
          Already registered?{" "}
          <Link to="/login" style={styles.link}>
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f7f6",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 35px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    width: "100%",
    maxWidth: "380px",
  },
  header: { textAlign: "center", marginBottom: "25px" },
  title: {
    margin: "0 0 8px 0",
    color: "#111827",
    fontSize: "24px",
    fontWeight: "700",
  },
  subtitle: { margin: 0, color: "#6b7280", fontSize: "14px" },
  inputGroup: { textAlign: "left", marginBottom: "18px" },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    color: "#374151",
    fontSize: "13px",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#10b981",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "5px",
  },
  successBox: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#d1fae5",
    color: "#065f46",
    borderRadius: "6px",
    fontSize: "13px",
    textAlign: "center",
    fontWeight: "500",
  },
  errorBox: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#fee2e2",
    color: "#dc2626",
    borderRadius: "6px",
    fontSize: "13px",
    textAlign: "center",
    fontWeight: "500",
  },
  errorText: {
    color: "#dc2626",
    fontSize: "12px",
    marginTop: "5px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "25px 0",
  },
  footerText: {
    margin: 0,
    fontSize: "14px",
    color: "#6b7280",
    textAlign: "center",
  },
  link: {
    color: "#4f46e5",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default Sign_Up;






// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function Sign_Up() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [status, setStatus] = useState('idle');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       const response = await fetch('https://amazing-big-spider.ngrok-free.app/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ user: formData }),
//       });

//       if (response.ok) {
//         setStatus('success');
//         // Automatically route to login
//         setTimeout(() => navigate('/login'), 1200);
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus('error');
//     }
//   };

//   return (
//     <div style={styles.pageBackground}>
//       <div style={styles.card}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>Create Account</h2>
//           <p style={styles.subtitle}>Get started with your free account</p>
//         </div>
        
//         <form onSubmit={handleSignup}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Full Name</label>
//             <input style={styles.input} type="text" name="name" placeholder="e.g. Diya" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email Address</label>
//             <input style={styles.input} type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input style={styles.input} type="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
//           </div>
//           <button type="submit" disabled={status === 'loading'} style={styles.button}>
//             {status === 'loading' ? 'Setting up...' : 'Sign Up'}
//           </button>
//         </form>

//         {status === 'success' && <div style={styles.successBox}>Account created! Redirecting to login...</div>}
//         {status === 'error' && <div style={styles.errorBox}>Error creating account. Please try again.</div>}
        
//         <div style={styles.divider}></div>

//         <p style={styles.footerText}>
//           Already registered? <Link to="/login" style={styles.link}>Log in here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageBackground: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f4f7f6', fontFamily: "'Inter', sans-serif" },
//   card: { backgroundColor: '#fff', padding: '40px 35px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', width: '100%', maxWidth: '380px' },
//   header: { textAlign: "center", marginBottom: "25px" },
//   title: { margin: '0 0 8px 0', color: '#111827', fontSize: '24px', fontWeight: '700' },
//   subtitle: { margin: 0, color: '#6b7280', fontSize: '14px' },
//   inputGroup: { textAlign: 'left', marginBottom: '18px' },
//   label: { display: 'block', marginBottom: '6px', fontWeight: '600', color: '#374151', fontSize: '13px' },
//   input: { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', boxSizing: 'border-box', outline: 'none' },
//   button: { width: '100%', padding: '12px', border: 'none', borderRadius: '8px', background: '#10b981', color: 'white', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '5px' },
//   successBox: { marginTop: "15px", padding: "10px", backgroundColor: "#d1fae5", color: "#065f46", borderRadius: "6px", fontSize: "13px", textAlign: "center", fontWeight: "500" },
//   errorBox: { marginTop: "15px", padding: "10px", backgroundColor: "#fee2e2", color: "#dc2626", borderRadius: "6px", fontSize: "13px", textAlign: "center", fontWeight: "500" },
//   divider: { height: '1px', backgroundColor: '#e5e7eb', margin: '25px 0' },
//   footerText: { margin: 0, fontSize: '14px', color: '#6b7280', textAlign: 'center' },
//   link: { color: '#4f46e5', fontWeight: '600', textDecoration: 'none' }
// };

// export default Sign_Up;