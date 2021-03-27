import mongoose from 'mongoose';

// Connection to mongodb
let connectdb = async (dbUrl, dbport, dbName) => {
    try {
        await mongoose.connect(`mongodb://${dbUrl}:${dbport}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('mongodb connected');
    } catch (e) {
        console.log(e);
    }

    console.log(`connection state: ${mongoose.connection.readyState}`);
}

export default connectdb;