// higher order function: a function that takes another function as an argument or returns a function as its result.
// method 1: higher order function with promise and catch block:
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// method 2: higher order function () => () +> {} , this is the example of higher order function with try catch block.
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message || "Internal Server Error",
//     });
//   }
// };
