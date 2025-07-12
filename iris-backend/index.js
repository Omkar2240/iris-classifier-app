const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const input = JSON.stringify(req.body).replace(/"/g, '\\"');

  const command = `python predict.py "${input}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error:", stderr);
      return res.status(500).send({ error: stderr });
    }

    console.log("✅ Output:", stdout);
    res.send({ prediction: stdout.trim() });
  });
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
