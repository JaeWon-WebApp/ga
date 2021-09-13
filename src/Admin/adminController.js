const adminProvider = require('./adminProvider');

exports.getDashboard = async function (req, res) {
  console.time('전체 시간');
  const providerResult = await adminProvider.getDashboard();
  return res.send(providerResult);
  console.timeEnd('전체 시간');
}