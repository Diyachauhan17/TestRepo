import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");

  // ✅ Formik Setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setStatus("loading");

      try {
        const response = await axios.post(
          "https://amazing-big-spider.ngrok-free.app/login",
          values,
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.status === 200 || response.data.token) {
          localStorage.setItem("token", response.data.token);

          const fetchedName =
            response.data.user?.name || response.data.name;
          const fallbackName = values.email.split("@")[0];

          localStorage.setItem(
            "userName",
            fetchedName || fallbackName
          );

          setStatus("success");
          setTimeout(() => navigate("/posts"), 800);
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    },
  });

  return (
    <div style={styles.pageBackground}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* ✅ Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="abc@example.com"
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
              placeholder="••••••••"
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
            {status === "loading"
              ? "Verifying..."
              : "Login Securely"}
          </button>
        </form>

        {status === "error" && (
          <div style={styles.errorBox}>
            Invalid Email or Password. Please try again.
          </div>
        )}

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/" style={styles.link}>
            Sign up here
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
  header: { textAlign: "center", marginBottom: "30px" },
  title: {
    margin: "0 0 8px 0",
    color: "#111827",
    fontSize: "24px",
    fontWeight: "700",
  },
  subtitle: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
  },
  inputGroup: { textAlign: "left", marginBottom: "20px" },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "600",
    fontSize: "13px",
    color: "#374151",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    boxSizing: "border-box",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "10px",
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
  footerText: {
    marginTop: "25px",
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

export default Login;