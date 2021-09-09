const baseResponse = require('../../config/baseResponseStatus');
const { resultResponse, basickResponse } = require('../../config/response');
const ga = require('../../config/googleAnalytics');

exports.getDashboard = async function () {
  try {
    const activeUser = await ga.activeUsers();
    const device = await ga.devices();
    const browser = await ga.browsers();
    const getDashboardResult = [
      {id: 'user', info: activeUser}, 
      {id:'device', info: device}, 
      {id: 'browser', info: browser},
    ];
    return resultResponse(baseResponse.SUCCESS, getDashboardResult);
  } catch (error) {
    console.error(error);
    return basickResponse(baseResponse.DB_ERROR);
  }
}