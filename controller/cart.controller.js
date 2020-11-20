const cartController = () => {
  const create = (req, res) => {
    try {
      return res.status(200).json({ cart: {} });
    } catch (err) {
      return res.status(500).json({ message: JSON.stringify(err) });
    }
  };

  // TODO why? const update = async (req, res, next ) =>{
  const update = (req, res) => {
    const cart = {};

    // TODO get from query
    const products = [{ whiskey: 'Laphrovulin' }];

    try {
      return res.status(200).json({ cart: { ...cart, ...products } });
    } catch (err) {
      return res.status(500).json({ message: JSON.stringify(err) });
    }
  };

  const empty = (req, res) => {
    try {
      return res.status(200).json({ cart: null });
    } catch (err) {
      return res.status(500).json({ message: JSON.stringify(err) });
    }
  };

  return {
    create,
    update,
    empty,
  };
};

module.exports = cartController;
