//import pool from '../connection/db_local.js';
import pool from '../connection/db_supabase.js';
import express from 'express';
const app = express();

//routes

//create a car
app.post("/", async (req, res) => {
    try {
        const car = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        km: req.body.km,
        price: req.body.price,
        image_url: req.body.image_url,
        description: req.body.description
        }
        const newCar = await pool.query(
            "INSERT INTO car (make, model, year, km, price, image_url, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [car.make, car.model, car.year, car.km, car.price, car.image_url, car.description]
        )
        res.json(newCar.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//get all cars
app.get("/", async (req, res) => {
    try {
        const allCars = await pool.query(
            "SELECT * FROM car");
        res.json(allCars.rows);
    } catch (err) {
        console.log(err.message);
    }
})
//get a car
app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const car = await pool.query(
            "SELECT * FROM car WHERE car_id = $1", 
            [id]
        );
        if (car.rows.length === 0)             
        res.json("GET-Car does not exist");
        else
        res.json(car.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//update a car
app.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { make, model, year, km, price, image_url, description } = req.body;

        const updateCar = await pool.query(
            "UPDATE car SET make = $1, model = $2, year = $3, km = $4, price = $5, image_url = $6, description = $7 WHERE car_id = $8 RETURNING *",
            [make, model, year, km, price, image_url, description, id]
        );

        if (updateCar.rows.length === 0) 
        res.json("UPDATE-Car does not exist");
        else
        res.json(updateCar.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

//delete a car
app.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCar = await pool.query(
            "DELETE FROM car WHERE car_id = $1",
            [id]
        );

        if (deleteCar.rows.length === 0) 
        res.json("DELETE-Care does not exist OR was deleted");
        else res.json(`Car #${id} does not exist`)
    } catch (err) {
        console.log(err.message);
    }
})

export default app