import express from 'express';
import cors from 'cors';
import employees from './routes/employee.js';

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/employees", employees);


app.listen(5000, () => {
    console.log("Express server has started on port 5000")
})