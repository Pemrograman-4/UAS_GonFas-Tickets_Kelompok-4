const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    judul: { type: String },
    deskripsi: { type: String },
    gambar: { type: String },
    genre: { type: String },
    harga: { type: String },
    date: { type: Date, default: Date.now }

})
module.exports = mongoose.model('tiket', UserSchema)