const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const secret = require('./secret');

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: './config/GaDataApi.json',
});

const gaActiveUsers = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${secret.viewId}`,
    dateRanges: [
    {
      startDate: '7daysAgo',
      endDate: 'yesterday',
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

const gaDevices = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${secret.viewId}`,
    dateRanges: [
    {
      startDate: '30daysAgo',
      endDate: 'yesterday',
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

const gaBrowsers = async () => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${secret.viewId}`,
    dateRanges: [
    {
      startDate: '30daysAgo',
      endDate: 'yesterday',
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

module.exports = {
  gaActiveUsers,
  gaDevices,
  gaBrowsers,
}