const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name']
    },
    quantity: {
        type: Number,
        required: true,
        defaultL: 0
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
},

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', ProductSchema);