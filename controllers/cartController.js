const Product = require("../models/Product");
const Cart = require("../models/Cart");

const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = async (request, response) => {
  const productName = request.params.name;
 try {
    const product = await Product.findByName(productName);

    if (!product) {
      return response.status(STATUS_CODE.NOT_FOUND).json({ success: false, message: 'Product not found' });
    }

    await Cart.add(product);
    return response.status(STATUS_CODE.OK).json({ success: true });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return response.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Server error' });
  }
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};

