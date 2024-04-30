const Express = require('express')
const app = Express()
const PORT = 5000
const route = require("./routes/route");

app.use(Express.json())

app.use(route);

app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);


