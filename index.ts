import express from 'express';
import dotenv from 'dotenv';

import weatherRoutes from './src/routes/weatherRoutes';
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
