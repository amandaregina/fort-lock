import express from "express";
import { handler } from "./modules/password/handlers/create-password";

const app = express();
app.use(express.json());

app.post('/password', async (req, res) => {
  try {
    const event = {
      body: req.body,
      headers: req.headers,
      queryStringParameters: req.query,
      pathParameters: req.params,
      httpMethod: req.method,
    }

    const result = await handler(event)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Internal Error' })
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
