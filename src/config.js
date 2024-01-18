let base_url;

process.env.NODE_ENV === "production"
  ? (base_url = "https://skill-stacks-backend.onrender.com")
  : (base_url = "http://localhost:8000");

export { base_url };
