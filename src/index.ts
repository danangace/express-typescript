import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  console.log(req.query)
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// TRIGGERING GITHUB ACCOUNT