module.exports = function(app) {
  const admin = require('./adminController');

  app.get('/admins/dashboard', admin.getDashboard);
}