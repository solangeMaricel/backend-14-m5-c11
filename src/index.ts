import express, { json } from 'express';
import { userRouter } from './routes/user-router';
//import { chartRouter } from './routes/chart-router';

const PORT = 36000;
const app = express();
app.use(json());

app.use('/api/users', userRouter);
//app.use('/api/chart', chartRouter)


app.get('/api', (req, res) => {
	res.status(200).json({
		name: 'API gestión de usuarios - Cartas natales',
		version: '1.0.0',
		running: true,
	});
});

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});