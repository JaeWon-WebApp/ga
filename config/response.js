const resultResponse = ({isSuccess, code, message}, result) => {
    return {
         isSuccess: isSuccess,
         code: code,
         message: message,
         result: result
    }
   };
 
   const basickResponse = ({isSuccess, code, message}) => {
     return {
         isSuccess: isSuccess,
         code: code,
         message: message
       }
   };
   
   module.exports = { resultResponse, basickResponse };