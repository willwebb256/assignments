function myMiddleware(req, res, next) {
    req.customProperty = 'This is a custom property set by the middleware';
    next();
  }
  
  module.exports = myMiddleware;
  