import express from 'express';
import router from './route';

const PORT = process.env.APPLICATION_PORT || 8088;

const app = express();

app.use(express.json());
app.use('/api', router);


app.listen(PORT, () => {
  console.log('start express success on port : ', PORT);
});
