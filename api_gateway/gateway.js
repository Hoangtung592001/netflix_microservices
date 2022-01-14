const express =  require('express');
const routes =  require('./routes');
const helmet = require('helmet');
const app = express();
const PORT = 5000;
const registstry = require('./routes/registry.json');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(helmet());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Gateway has started on PORT ${PORT}`);
})