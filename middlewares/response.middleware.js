const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  const { status = 200, response } = req.response;
  res.status(status).json(response);
};

export { responseMiddleware };
