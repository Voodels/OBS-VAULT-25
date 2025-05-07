const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  next();
  
  console.log("🌐 AUTH MIDDLEWARE TRIGGERED on", req.originalUrl);
  console.log("🔑 Headers:", req.headers);

  const authHeader = req.headers.authorization;
  
  // Check if header exists and has correct format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("❌ Invalid or missing Authorization header");
    return res.status(401).json({
      success: false,
      message: "Authorization header missing or invalid",
    });
  }

  // Extract token
  const token = authHeader.split(' ')[1];
  
  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    console.log("🔐 Verifying token...");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Verified user:", payload.userEmail);
    
    req.user = payload;
    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    
    let message = "Invalid token";
    if (error.name === 'TokenExpiredError') {
      message = "Token expired";
    } else if (error.name === 'JsonWebTokenError') {
      message = "Malformed token";
    }

    return res.status(401).json({
      success: false,
      message: message,
    });
  }
};

module.exports = authenticate;