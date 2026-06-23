const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.get("/data", async (req, res) => {
     try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbxSHho8VNT8hW-apBXN52VCd9Kd4TzCjDeO15S4Qq6zPAoNK3EQUFX-EefWZlzaklAc/exec');

        res.status(200).json(response.data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
    }
});

app.use((req, res) => {
    res.status(404).send('page not found');
});

app.listen(3000);