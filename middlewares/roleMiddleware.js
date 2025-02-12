const roleMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Sizda bu amalni bajarish huquqi yo‘q!" });
    }
    next();
  };
  
  module.exports = roleMiddleware;
  