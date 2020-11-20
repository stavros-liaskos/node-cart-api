const dummyMiddleWare = async (req, res, next) => {
  try {
    // Do something before the response
    next();
  } catch (error) {
    return res.status(500).json({ message: `${JSON.stringify(error)}` });
  }
};

module.exports = dummyMiddleWare;
