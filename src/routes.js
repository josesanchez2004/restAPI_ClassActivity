"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        res.status(200).send("This is running!").end();
    });

    app.get('/api/resources', async (req, res) => {
        let query;
        query = database.query('SELECT * FROM rest_emp');

        const records = await query;

        res.status(200).send(JSON.stringify(records)).end();
    });

    app.get('/api/resources/:id', async (req, res) => {
        const employeeID = req.params.id;
        database.query('SELECT * FROM rest_emp WHERE id = ?', [employeeID], (err,res) => {
                res.json(result[0]);
        })
    });

    app.get('api/resources/emp', (req,res) => {
        const employeeName = req.query.name;
        database.query('SELECT * FROM rest_emp WHERE name = ?', [employeeName], (res) => {
                res.json(results);
        })
    })

    app.post("api/emp", (req,res) => {
        const {id,name,phone,email,address} = req.body;
        const newEmployee = {id,name,phone,email,address};

        database.query("INSERT INTO rest_emp SET ?", newEmployee);
    })

    

};
