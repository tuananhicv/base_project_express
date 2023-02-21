const mongoose = require('mongoose');
const dbName = 'badminton';

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://localhost:27017/' + dbName, {
            useNewUrlParser: true
        });
        console.log('Kết nối db thành công');
    } catch (error) {
        console.log(error);
        console.log('Kết nối db thất bại');
    }
}

module.exports = { connect };