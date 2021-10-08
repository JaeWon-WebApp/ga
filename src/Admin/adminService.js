const { pool } = require('../../config/database');
const baseResponse = require('../../config/baseResponseStatus');
const { resultResponse, basickResponse } = require('../../config/response');
const adminDao = require('./adminDao');

exports.postTest = async function(name, age, married, comment) {
  const connection = await pool.getConnection(async (conn) => conn);
  try{
    connection.beginTran
    const testParam = [name, age, married, comment];
    await adminDao.updateTest(connection, testParam);
    connection.release();
    return basickResponse(baseResponse.SUCCESS);
  } catch(error) {
    console.log(error);
    return basickResponse(baseResponse.DB_ERROR);
  }
}