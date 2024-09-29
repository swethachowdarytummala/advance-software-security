// Fake database query function for testing
const db = {
    query: (query, params, callback) => {
        // Simulate a successful database response
        const mockResults = [
            { id: 1, title: "Secure Coding Practices" },
            { id: 2, title: "Understanding SQL Injection" }
        ];
        callback(null, mockResults);
    }
};

// Secure search feature using parameterized queries
app.get('/search', (req, res) => {
    let searchQuery = req.query.search || ''; // Default to empty string if no input

    // Use parameterized query
    let query = `SELECT * FROM posts WHERE title LIKE ?`;

    // Execute the query with the user input safely passed as a parameter
    db.query(query, [`%${searchQuery}%`], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Server error");
        }
        res.json(results);
    });
});
