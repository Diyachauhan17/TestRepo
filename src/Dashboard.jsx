import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const BASE_URL = "https://amazing-big-spider.ngrok-free.app";
  const API_URL = `${BASE_URL}/posts`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (imageFile) formData.append("image", imageFile);

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API_URL}/${editingId}` : API_URL;

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (res.ok) {
        resetForm();
        setIsFormOpen(false);
        fetchPosts();
      }
    } catch (error) {
      console.log("Error saving post");
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImageFile(null);
    setEditingId(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">My Dashboard</h2>

          <button
            className="menu-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-right ${isNavOpen ? "open" : ""}`}>
            <button
              onClick={() => {
                resetForm();
                setIsFormOpen(!isFormOpen);
                setIsNavOpen(false);
              }}
              className="create-btn"
            >
              + Create Post
            </button>

            <span className="username">
              👋 {user?.name || "User"}
            </span>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MODERN FORM ================= */}
      <div className={`form-wrapper ${isFormOpen ? "open" : ""}`}>
        <div className="form-card">
          <h2 className="form-title">
            {editingId ? "✏ Update Product" : "➕ Add New Product"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Product Title</label>
              <input
                type="text"
                placeholder="Enter product title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Description</label>
              <textarea
                placeholder="Write product description..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

            <button type="submit" className="submit-btn">
              {editingId ? "Update Now" : "Post to Server"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="main">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading Products...</p>
        ) : (
          <div className="grid">
            {posts.map((post) => {
              const imgUrl = post.image_url?.startsWith("http")
                ? post.image_url
                : `${BASE_URL}${post.image_url}`;

              return (
                <div key={post.id} className="card">
                  <div className="img-wrapper">
                    <img
                      src={imgUrl}
                      alt="product"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/150?text=No+Image")
                      }
                    />
                  </div>

                  <div className="card-body">
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>

                    <div className="card-actions">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setEditingId(post.id);
                          setTitle(post.title);
                          setContent(post.content);
                          setIsFormOpen(true);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={async () => {
                          if (window.confirm("Delete this post?")) {
                            await fetch(`${API_URL}/${post.id}`, {
                              method: "DELETE",
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            });
                            fetchPosts();
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .page {
          background: #f8f9fa;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .navbar {
          background: linear-gradient(90deg, #1d8cf9, #2f80ed);
          height: 80px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 0 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo { color: white; margin: 0; }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .create-btn {
          background: white;
          color: #1d8cf9;
          border: none;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
        }

        .logout-btn {
          background: transparent;
          border: 1.5px solid white;
          color: white;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
        }

        .username { color: white; }

        .menu-toggle {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-toggle { display: block; }

          .nav-right {
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background: #1d8cf9;
            flex-direction: column;
            padding: 20px;
            display: none;
          }

          .nav-right.open {
            display: flex;
          }
        }

        .form-wrapper {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .form-wrapper.open {
          max-height: 800px;
          opacity: 1;
          padding: 40px 20px;
        }

        .form-card {
          max-width: 500px;
          margin: auto;
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }

        .form-title {
            text-align: center;
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 35px;
            background: linear-gradient(90deg, #1d8cf9, #6a11cb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          

        .input-group { margin-bottom: 20px; }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ddd;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(90deg, #1d8cf9, #2f80ed);
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .main {
          max-width: 1200px;
          margin: 30px auto;
          padding: 0 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 25px;
        }

        .card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        .img-wrapper {
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .card-body { padding: 20px; }

        .card-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
        }

        .edit-btn {
          background: #ff9800;
          color: white;
          border: none;
          padding: 6px 16px;
          border-radius: 6px;
        }

        .delete-btn {
          background: #f44336;
          color: white;
          border: none;
          padding: 6px 16px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
