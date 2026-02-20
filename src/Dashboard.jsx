import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();
  const BASE_URL = "https://amazing-big-spider.ngrok-free.app";
  const API_URL = `${BASE_URL}/posts`;
  const token = localStorage.getItem("token");
  const loggedUser = localStorage.getItem("userName");

  useEffect(() => {
    if (loggedUser) setUser({ name: loggedUser });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
      setPosts(res.data);
    } catch {
      alert("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("content", content);
    if (imageFile) fd.append("image", imageFile);

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(API_URL, fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setTitle("");
      setContent("");
      setImageFile(null);
      setEditingId(null);
      setIsFormOpen(false);
      fetchPosts();
    } catch {
      alert("Something went wrong ❌");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPosts();
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h2 style={styles.logo}>My Dashboard</h2>

          <div style={styles.navRight}>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              style={styles.addBtn}
            >
              {isFormOpen ? "✕  Close Menu" : "✨ Create Post"}
            </button>
            <span style={styles.userName}>👋 {user?.name}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* FORM */}
      {isFormOpen && (
        <div style={styles.formContainer}>
          <div style={styles.formCard}>
            <h3 style={{ marginBottom: "15px" }}>{editingId ? "Edit Post" : "New Post"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                style={styles.input}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                style={styles.textarea}
                placeholder="What's on your mind?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "14px" }}>Cover Image:</label>
                <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
              </div>
              <button style={styles.submitBtn}>
                {editingId ? "Update Post" : "Publish Post"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        {loading ? (
          <div style={{ textAlign: "center", fontSize: "20px" }}>Loading amazing posts...</div>
        ) : (
          <div style={styles.grid}>
            {posts.map((post) => {
              const isOwner = post.user?.name === loggedUser;
              const imgUrl = post.image_url?.startsWith("http")
                ? post.image_url
                : `${BASE_URL}${post.image_url}`;

              return (
                <div key={post.id} style={styles.card}>
                  <img src={imgUrl} style={styles.image} alt="" />
                  <div style={styles.cardBody}>
                    <h4 style={styles.postTitle}>{post.title}</h4>
                    <p style={styles.postContent}>{post.content}</p>

                    {isOwner && (
                      <div style={styles.cardActions}>
                        <button onClick={() => handleEdit(post)} style={styles.editBtn}>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          style={styles.deleteBtn}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* STYLES WITH RESPONSIVE CONSIDERATIONS */
const styles = {
  page: { 
    background: "#f4f7f6", 
    minHeight: "100vh", 
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: "#333" 
  },

  navbar: {
    position: "sticky",
    top: 0,
    minHeight: "80px", // Increased height
    background: "#fff",
    zIndex: 1000,
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
  },

  navContent: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    flexWrap: "wrap", // Enables responsiveness
    gap: "10px",
  },

  logo: { 
    fontSize: "28px", // Bigger font
    fontWeight: "800", 
    color: "#4f46e5", 
    margin: 0 
  },

  navRight: { 
    display: "flex", 
    gap: "12px", 
    alignItems: "center",
    flexWrap: "wrap" 
  },

  userName: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#4b5563"
  },

  addBtn: { 
    background: "#4f46e5", 
    color: "#fff", 
    padding: "10px 18px", 
    border: 0, 
    borderRadius: 8, 
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "16px"
  },

  logoutBtn: { 
    background: "#fee2e2", 
    color: "#dc2626", 
    border: "1px solid #fecaca", 
    padding: "8px 16px", 
    borderRadius: 8, 
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "15px"
  },

  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },

  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
    gap: "25px" 
  },

  card: { 
    background: "#fff", 
    borderRadius: 15, 
    overflow: "hidden", 
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    transition: "transform 0.2s"
  },

  image: { width: "100%", height: 220, objectFit: "cover" },

  cardBody: { padding: "20px" },

  postTitle: { fontSize: "20px", margin: "0 0 10px 0", color: "#111827" },
  postContent: { fontSize: "16px", color: "#6b7280", lineHeight: "1.5" },

  cardActions: { display: "flex", gap: 10, marginTop: 20 },
  editBtn: { 
    flex: 1, 
    background: "#fef3c7", 
    color: "#92400e", 
    border: 0, 
    padding: "10px", 
    borderRadius: 8, 
    fontWeight: "600",
    cursor: "pointer" 
  },
  deleteBtn: { 
    flex: 1, 
    background: "#fee2e2", 
    color: "#b91c1c", 
    border: 0, 
    padding: "10px", 
    borderRadius: 8, 
    fontWeight: "600",
    cursor: "pointer" 
  },

  formContainer: {
    padding: "0 20px",
    marginTop: "20px"
  },

  formCard: { 
    maxWidth: 600, 
    margin: "0 auto", 
    background: "#fff", 
    padding: "30px", 
    borderRadius: 15,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },

  input: { 
    width: "100%", 
    marginBottom: 15, 
    padding: "12px", 
    borderRadius: 8, 
    border: "1px solid #ddd",
    fontSize: "16px",
    boxSizing: "border-box"
  },

  textarea: { 
    width: "100%", 
    height: 120, 
    marginBottom: 15, 
    padding: "12px", 
    borderRadius: 8, 
    border: "1px solid #ddd",
    fontSize: "16px",
    fontFamily: "inherit",
    boxSizing: "border-box"
  },

  submitBtn: { 
    width: "100%", 
    background: "#10b981", 
    color: "#fff", 
    padding: "14px", 
    border: 0, 
    borderRadius: 8, 
    fontSize: "18px", 
    fontWeight: "700",
    cursor: "pointer"
  },
};

export default Dashboard;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   // Form State
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [editingId, setEditingId] = useState(null);
  
//   // NEW: Track existing image and removal intention
//   const [existingImageUrl, setExistingImageUrl] = useState(null);
//   const [removeImageFlag, setRemoveImageFlag] = useState(false);

//   const navigate = useNavigate();
//   const BASE_URL = "https://amazing-big-spider.ngrok-free.app";
//   const API_URL = `${BASE_URL}/posts`;
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) {
//       setUser({ name: storedName });
//     }
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "ngrok-skip-browser-warning": "true",
//         },
//       });
//       // If unauthorized (token expired from yesterday), force logout
//       if (response.status === 401 || response.status === 403) {
//         handleLogout();
//         return;
//       }
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.log("Error fetching posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
    
//     if (imageFile) {
//       formData.append("image", imageFile); // User uploaded a new image
//     } else if (removeImageFlag) {
//       formData.append("remove_image", "true"); // Tell backend to delete the old image
//     }

//     const method = editingId ? "PUT" : "POST";
//     const url = editingId ? `${API_URL}/${editingId}` : API_URL;

//     try {
//       const res = await fetch(url, {
//         method: method,
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       if (res.ok) {
//         resetForm();
//         setIsFormOpen(false); 
//         fetchPosts(); 
//       } else {
//         if (res.status === 401) {
//           alert("Your session expired. Please log in again.");
//           handleLogout();
//         } else {
//           alert("Failed to save. Check console for details.");
//         }
//       }
//     } catch (error) {
//       console.log("Error saving post");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to permanently delete this post?")) {
//       try {
//         await axios.delete(`${API_URL}/${id}`, {
//           headers: { 
//             Authorization: `Bearer ${token}`,
//             "ngrok-skip-browser-warning": "true"
//           }
//         });
//         fetchPosts();
//       } catch (error) {
//         console.error("Delete Error:", error.response);
//         if (error.response?.status === 401) {
//           alert("Your session expired. Please log in again.");
//           handleLogout();
//         } else {
//           alert("Could not delete the post. Check your backend permissions.");
//         }
//       }
//     }
//   };

//   const resetForm = () => {
//     setTitle(""); 
//     setContent(""); 
//     setImageFile(null); 
//     setEditingId(null);
//     setExistingImageUrl(null);
//     setRemoveImageFlag(false);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/'); 
//   };

//   return (
//     <div style={styles.page}>
//       <nav style={styles.navbar}>
//         <div style={styles.navContent}>
//           <h2 style={styles.logo}>My <span>Dashboard</span></h2>
//           <div style={styles.navRight}>
//             <button onClick={() => { resetForm(); setIsFormOpen(!isFormOpen); }} style={styles.addBtn}>
//               {isFormOpen ? "✕ Close Menu" : "✨ Create Post"}
//             </button>
//             <span style={styles.userName}>👋 Hi, <span style={styles.highlightName}>{user?.name || "Guest"}</span></span>
//             <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
//           </div>
//         </div>
//       </nav>

//       {/* DROPDOWN FORM */}
//       <div style={{
//         ...styles.formDropdown,
//         maxHeight: isFormOpen ? '800px' : '0px',
//         opacity: isFormOpen ? 1 : 0,
//         padding: isFormOpen ? '20px 0' : '0', 
//       }}>
//         <div style={styles.formCard}>
//           <h3 style={styles.formTitle}>{editingId ? "Update Post ✏️" : "Create New Post 🚀"}</h3>
//           <form onSubmit={handleSubmit}>
//             <input style={styles.input} type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//             <textarea style={styles.textarea} placeholder="What's on your mind?" value={content} onChange={(e) => setContent(e.target.value)} required />
            
//             {/* NEW: Display the existing image if editing so the user can delete it */}
//             {editingId && existingImageUrl && !removeImageFlag && !imageFile && (
//               <div style={styles.existingImageWrapper}>
//                 <p style={{ margin: "0 0 5px 0", fontSize: "13px", color: "#666" }}>Current Image:</p>
//                 <img 
//                   src={existingImageUrl.startsWith('http') ? existingImageUrl : `${BASE_URL}${existingImageUrl}`} 
//                   style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px", border: "1px solid #ddd" }} 
//                   alt="current" 
//                 />
//                 <br />
//                 <button type="button" onClick={() => setRemoveImageFlag(true)} style={styles.removeImgBtn}>
//                   ❌ Remove Current Image
//                 </button>
//               </div>
//             )}

//             <div style={styles.fileInputWrapper}>
//               <label htmlFor="imageUpload" style={styles.fileLabel}>
//                 {imageFile ? `✅ ${imageFile.name}` : "📷 Upload New Image"}
//               </label>
//               <input id="imageUpload" type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} style={styles.fileInputHidden} />
//             </div>

//             <button type="submit" style={styles.submitBtn}>{editingId ? "Update Now" : "Publish Post"}</button>
//           </form>
//         </div>
//       </div>

//       {/* PRODUCT GRID */}
//       <div style={styles.main}>
//         {loading ? <p style={styles.loadingText}>Loading your colorful feed...</p> : (
//           <div style={styles.grid}>
//             {posts.map((post) => {
//               const imgUrl = post.image_url?.startsWith('http') ? post.image_url : `${BASE_URL}${post.image_url}`;
//               return (
//                 <div key={post.id} className="card-hover" style={styles.card}>
//                   <div style={styles.imgWrapper}>
//                     {post.image_url ? (
//                        <img src={imgUrl} style={styles.image} alt="post" onError={(e) => e.target.src="https://via.placeholder.com/150?text=No+Image"} />
//                     ) : (
//                        <div style={{ color: "#aaa", fontSize: "14px" }}>No Image Attached</div>
//                     )}
//                   </div>
//                   <div style={styles.cardBody}>
//                     <h4 style={styles.cardTitle}>{post.title}</h4>
//                     <p style={styles.cardText}>{post.content}</p>
//                     <div style={styles.cardActions}>
//                       <button 
//                         onClick={() => { 
//                           setEditingId(post.id); 
//                           setTitle(post.title); 
//                           setContent(post.content); 
//                           setExistingImageUrl(post.image_url); // Store the old image URL
//                           setRemoveImageFlag(false); // Reset removal flag
//                           setImageFile(null);
//                           setIsFormOpen(true); 
//                           window.scrollTo({top: 0, behavior: 'smooth'}); 
//                         }} 
//                         style={styles.editBtn}>
//                         Edit
//                       </button>
//                       <button onClick={() => handleDelete(post.id)} style={styles.deleteBtn}>Delete</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       <style>{`
//         .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
//         .card-hover:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0,0,0,0.15); }
//         ::placeholder { color: #aaa; }
//       `}</style>
//     </div>
//   );
// }

// const styles = {
//   page: { background: "#f4f7f6", minHeight: "100vh", fontFamily: "'Inter', sans-serif", paddingBottom: "50px" },
//   navbar: { background: "#ffffff", color: "#333", height: '75px', display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, borderBottom: "1px solid #eaeaea", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" },
//   navContent: { width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 25px', alignItems: 'center' },
//   logo: { margin: 0, fontSize: '24px', fontWeight: '800', color: "#2c3e50" },
//   navRight: { display: 'flex', alignItems: 'center', gap: '25px' },
//   addBtn: { background: "#4f46e5", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", transition: "all 0.2s" },
//   userName: { fontWeight: '500', fontSize: '15px', color: "#555" },
//   highlightName: { fontWeight: '800', color: '#4f46e5', textTransform: 'capitalize' },
//   logoutBtn: { background: "#fee2e2", color: "#ef4444", border: "none", padding: "8px 18px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "14px", transition: "all 0.2s" },
//   formDropdown: { overflow: 'hidden', transition: 'all 0.4s ease', background: '#f4f7f6' },
//   formCard: { maxWidth: '500px', margin: '0 auto', padding: '30px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' },
//   formTitle: { margin: "0 0 20px 0", color: "#1f2937", fontSize: "20px", textAlign: 'center', fontWeight: '700' },
//   input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', outline: 'none', fontSize: '15px' },
//   textarea: { width: '100%', padding: '12px', height: '110px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', outline: 'none', fontSize: '15px', fontFamily: 'inherit', resize: 'vertical' },
//   existingImageWrapper: { marginBottom: "15px", padding: "10px", background: "#f9fafb", borderRadius: "8px", textAlign: "center", border: "1px solid #e5e7eb" },
//   removeImgBtn: { background: "none", border: "none", color: "#ef4444", fontWeight: "600", fontSize: "13px", marginTop: "8px", cursor: "pointer", textDecoration: "underline" },
//   fileInputWrapper: { marginBottom: '20px', textAlign: 'center' },
//   fileLabel: { display: 'inline-block', padding: '10px 20px', background: '#f3f4f6', color: '#374151', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', border: '1px dashed #9ca3af', width: '100%', boxSizing: 'border-box' },
//   fileInputHidden: { display: 'none' },
//   submitBtn: { width: '100%', padding: '14px', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer' },
//   main: { maxWidth: '1200px', margin: '40px auto', padding: '0 20px' },
//   loadingText: { textAlign: 'center', color: '#6b7280', fontSize: '18px', fontWeight: '600' },
//   grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' },
//   card: { background: 'white', borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #e5e7eb' },
//   imgWrapper: { height: '220px', background: '#f9fafb', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
//   image: { width: '100%', height: '100%', objectFit: 'cover' },
//   cardBody: { padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' },
//   cardTitle: { margin: '0 0 10px 0', fontSize: '19px', fontWeight: '700', color: '#111827' },
//   cardText: { fontSize: '15px', color: '#4b5563', marginBottom: '20px', flexGrow: 1, lineHeight: '1.6' },
//   cardActions: { display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: 'auto' },
//   editBtn: { flex: 1, background: "#fef3c7", color: "#d97706", border: "1px solid #fde68a", padding: "10px", borderRadius: "6px", cursor: "pointer", fontWeight: '700' },
//   deleteBtn: { flex: 1, background: "#fee2e2", color: "#dc2626", border: "1px solid #fecaca", padding: "10px", borderRadius: "6px", cursor: "pointer", fontWeight: '700' }
// };

// export default Dashboard;