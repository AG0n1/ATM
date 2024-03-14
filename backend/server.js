const express = require('express')
const app = express()

const users = {
    AG0n1: {
        name: "Matthew",
        second_name: "Markovets"
    },
    Test: {
        name: "Test",
        second_name: "Test"
    }
}

app.get('/api', (req, res) => {
    res.json(users);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
})