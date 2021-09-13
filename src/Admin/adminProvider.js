const baseResponse = require('../../config/baseResponseStatus');
const { resultResponse, basickResponse } = require('../../config/response');
const {gaActiveUsers, gaDevices, gaBrowsers} = require('../../config/googleAnalytics');

exports.getDashboard = async function () {
  try {
    const user = await gaActiveUsers();
    const userResult = {
      metrics: {
        active1DayUser: user.rows.map(row => row.metricValues[0].value),
        active7DayUser: user.rows.map(row => row.metricValues[1].value),
        active28DayUser: user.rows.map(row => row.metricValues[2].value),
      },
      dimensions: {
        date: user.rows.map(row => row.dimensionValues[0].value),
      },
    };
    const device = await gaDevices();
    const deviceResult = {
      metrics: {
        activeUser: device.rows.map(row => row.metricValues[0].value),
      },
      dimensions: {
        device: device.rows.map(row => row.dimensionValues[0].value),
      },
    };
    const browser = await gaBrowsers();
    const browserResult = {
      metrics: {
        activeUser: browser.rows.map(row => row.metricValues[0].value),
      },
      dimensions: {
        browser: browser.rows.map(row => row.dimensionValues[0].value),
      },
    };
    const getDashboardResult = [
      { id: 'user', info: userResult },
      { id: 'device', info: deviceResult },
      { id: 'browser', info: browserResult },
    ];
    return resultResponse(baseResponse.SUCCESS, getDashboardResult);
  } catch (error) {
    console.error(error);
    return basickResponse(baseResponse.DB_ERROR);
  }
}