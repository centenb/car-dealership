import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_SUPABASE_URL,

    // Add SSL configuration if needed, especially for production
    ssl: {
    rejectUnauthorized: false, // Set to true and provide certificate in production
    ca: process.env.SSL_CERT_FILE // Path to your downloaded SSL certificate
    }

});

export default pool;


