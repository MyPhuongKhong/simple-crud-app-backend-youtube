import Product from '../models/product.model.js';

const getProducts = async (req, res) =>{
  try {
    const products = await Product.find({}); 
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const getOneProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const updateProduct = async (req, res) => {
  try {
    // Tìm = id và update sản phẩm
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    
    // Nếu ko tìm thấy thì trả về lỗi 404
    if (!product) {
      return res.status(404).json({message: 'Product not found'});
    }
    
    // Ngc lại, đã tìm thấy thì ktra update chưa?
    // Bằng cách: tìm tiếp trong CSDL và trả về updatedProduct
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({message:'Product not found'});
    }

    res.status(200).json({message: "Product deleted successfully"});

  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export default {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
};