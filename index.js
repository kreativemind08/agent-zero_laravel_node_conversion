const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const contentItemRoutes = require('./routes/contentItemRoutes');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use('/content-items', contentItemRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});