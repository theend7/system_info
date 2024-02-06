const express = require('express');
const os = require('os');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); //allow cross-origin requests from angular app

app.get('/api/system-info', (req, res) => {
    const systemInfo = {
        os: {
            platform: os.platform(),
            type: os.type(),
            architecture: os.arch(),
            release: os.release(),
        },
        server: {
            nodeVersion: process.version,
        },
    };

    res.json(systemInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
