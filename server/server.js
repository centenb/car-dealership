import express from 'express';
import cors from 'cors';
import employees from './routes/employee.js';
import cars from './routes/cars.js';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
dotenv.config();

const app = express();

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use("/employees", employees);
app.use("/cars", cars);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'dist')))
}
console.log(JSON.stringify(process.env, null, 2));
app.listen(5000, () => {
    console.log("Express server has started on port 5000")
})

