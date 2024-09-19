import express from 'express';

const app = express();
const PORT = 3000;

app.get('/products', (req, res) => {
  res.status(200).json({ message : 'Get Request - fetching all products' });
});

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
