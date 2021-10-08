const adminProvider = require('./adminProvider');

exports.getDashboard = async function (req, res) {
  const providerResult = await adminProvider.getDashboard();
  return res.send(providerResult);
}

exports.updateTest = async function (req, res) {
  const { name, age, married, comment } = req.body;
  console.log(name, age, married, comment);
  const testResult = await adminService.postTest(name, age, married, comment);
  res.send(testResult);
}