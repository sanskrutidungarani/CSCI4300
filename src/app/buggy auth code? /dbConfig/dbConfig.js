import { connect as _connect, connection as _connection } from 'mongoose';

async function connect() {
    try {
        await _connect('mongodb+srv://atlas:<password>@cluster0.9miz2qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Recommended options for new projects
        });

        console.log("MongoDB connected successfully");

        _connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit with an error code
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit with an error code
    }
}

export default connect;
