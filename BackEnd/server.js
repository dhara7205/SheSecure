const express = require('express');
const bcrypt = require('bcrypt');
const {
    createPool
} = require('mysql');

const pool = createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Dhara0!1$8',
    database : 'IWT',
    connectionLimit: 10
  });

const app = express();
app.use(express.json());

const cors = require('cors');
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.post('/signup', (req, res) => {
    const {
        first_name, last_name, password, mobile_number, email_id,
        age, address, state, country, emergency_contact_1, emergency_contact_2
    } = req.body;

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error hashing password');
        }

        // SQL query to insert data
        const query = `
            INSERT INTO UserDetails 
            (first_name, last_name, password, mobile_number, email_id, 
            age, address, state, country, emergency_contact_1, emergency_contact_2) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Execute query with values, inserting the hashed password
        pool.query(query, [first_name, last_name, hashedPassword, mobile_number, email_id, 
            age, address, state, country, emergency_contact_1, emergency_contact_2], 
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Error inserting data');
                }
                res.status(200).send('User data inserted successfully');
            }
        );
    });
});
app.post('/login', (req, res) => {
    console.log("yes");
    const { email_id, password } = req.body;
    console.log(email_id);
    // Query to check if the email exists
    const query = 'SELECT * FROM UserDetails WHERE email_id = ?';

    pool.query(query, [email_id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Server error');
        }

        if (results.length === 0) {
            // No user found with the provided email
            return res.status(404).send('User not found');
        }

        const user = results[0];

        // Compare the provided password with the stored password (assuming the password is hashed)
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Server error');
            }

            if (!isMatch) {
                // Incorrect password
                return res.status(400).send('Invalid credentials');
            }

            // Login successful
            res.status(200).json({
                message: 'Login successful',
                user: {
                    firstName: user.first_name,
                    lastName: user.last_name,
                    emailId: user.email_id,
                    mobileNumber: user.mobile_number
                }
            });
        });
    });
});

const PORT = 5000;
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});