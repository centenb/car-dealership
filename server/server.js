import express from 'express';
import cors from 'cors';
import employees from './routes/employee.js';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/employees", employees);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'dist')))
}


app.listen(5000, () => {
    console.log("Express server has started on port 5000")
})

