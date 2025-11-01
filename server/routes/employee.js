//import pool from '../connection/db_local.js';
import pool from '../connection/db_supabase.js';
import bcrypt from 'bcrypt';
import express from 'express';
const app = express();

//routes

//create an employee
app.post("/", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const employee = {
        username: req.body.username,
        password: hashedPassword
        }
        const newEmployee = await pool.query(
            "INSERT INTO employee (username, password) VALUES ($1, $2) RETURNING *",
            [employee.username, employee.password]
        )
        res.json(newEmployee.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//get all employees
app.get("/", async (req, res) => {
    try {
        const allEmployees = await pool.query(
            "SELECT * FROM employee");
        res.json(allEmployees.rows);
    } catch (err) {
        console.log(err.message);
    }
})
//get an employee
app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await pool.query(
            "SELECT * FROM employee WHERE employee_id = $1", 
            [id]
        );
        if (employee.rows.length === 0)             
        res.json("GET-Employee does not exist");
        else
        res.json(employee.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//update an employee
app.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const updateEmployee = await pool.query(
            "UPDATE employee SET username = $1, password = $2 WHERE employee_id = $3 RETURNING username",
            [username, hashedPassword, id]
        );

        if (updateEmployee.rows.length === 0) 
        res.json("UPDATE-Employee does not exist");
        else
        res.json(updateEmployee.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//delete an employee
app.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEmployee = await pool.query(
            "DELETE FROM employee WHERE employee_id = $1",
            [id]
        );

        if (deleteEmployee.rows.length === 0) 
        res.json("DELETE-Employee does not exist OR was deleted");
        else res.json(`Employee #${id} does not exist`)
    } catch (err) {
        console.log(err.message);
    }
})

//check hash valid
app.post("/login", async (req, res) => {
    
    try{
        const result = await pool.query(
            "SELECT * FROM employee WHERE username = $1", 
            [req.body.username]
        );
        if(result.rows.length === 0) {
            res.send({ message: "Username invalid"});
            return;
        }
        if(await bcrypt.compare(req.body.password, result.rows[0].password)) 
        res.send({ message: 'Login successful'})
        else res.send({ message: "Password entered incorrect" });
    } catch (err) {
        console.log(err.message);
    }
})

export default app