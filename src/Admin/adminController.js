const adminProvider = require('./adminProvider');

exports.getDashboard = async function (req, res) {
  const providerResult = await adminProvider.getDashboard();
  return res.send(providerResult);
}