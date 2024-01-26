//
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    // isNew: Boolean,
    oldPrice: Number,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    quantity: Number,
    images: [{ type: String }]
});

const ProductDb = mongoose?.models?.Product || mongoose.model('Product', productSchema);
export default ProductDb;
