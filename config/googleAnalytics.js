const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const secret = require('./secret');

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: './config/GaDataApi.json',
});

exports.activeUsers = async function() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${secret.viewId}`,
    dateRanges: [
    {
      startDate: '7daysAgo',
      endDate: 'today',
    },
    ],
    dimensions: [
    {
      name: 'date',
    },
    ],
    metrics: [
    {
      name: 'active1DayUsers',
    },
    {
      name: 'active7DayUsers',
    },
    {
      name: 'active28DayUsers',
    },
    ],
    orderBys: [
      {
        dimension: {
          orderType: "NUMERIC",
          dimensionName: "date"
        }
      },
    ],
  });

  return response;
}

exports.devices = async function() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${property}`,
    dateRanges: [
    {
      startDate: '30daysAgo',
      endDate: 'today',
    },
    ],
    dimensions: [
    {
      name: 'deviceCategory',
    },
    ],
    metrics: [
    {
      name: 'activeUsers',
    },
    ],
  });

  return response;
}

exports.browsers = async function() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${property}`,
    dateRanges: [
    {
      startDate: '30daysAgo',
      endDate: 'today',
    },
    ],
    dimensions: [
    {
      name: 'browser',
    },
    ],
    metrics: [
    {
      name: 'activeUsers',
    },
    ],
  });

  return response;
}