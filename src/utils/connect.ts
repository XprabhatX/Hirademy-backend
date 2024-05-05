import mongoose from "mongoose"

// MongoDD Connection
async function connect() {
    const dbUri = <string>process.env.MONGO_URI
    
    try {
        await mongoose.connect(dbUri, {
            dbName: 'hirademy',
        })
        console.log('✔ connected to DB')
    } catch (error) {
        
        console.error('❌ Error connecting to DB. Please check the MONGO_URI parameter in environment variable.\nMore info : ' + error)
        process.exit(1)
    }
}

export default connect