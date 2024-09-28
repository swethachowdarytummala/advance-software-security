// Secure search feature using parameterized queries

app.get('/search', (req, res) => {

    let searchQuery = req.query.search;

    let query = `SELECT * FROM posts WHERE title LIKE ?`; // Use parameterized query

    

    // Execute the query with the user input safely passed as a parameter

    db.query(query, [`%${searchQuery}%`], (err, results) => {

        if (err) {

            console.error(err);

            return res.status(500).send("Server error");

        }

        res.json(results);

    });

});
