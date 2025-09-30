"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
const port = 3000;
app.get('/', (req, res) => 
    res.send('Hello World!'));
app.listen(3000, () => {
    console.log(`Example app listening on port 3000 ${port}!` );
});
//# sourceMappingURL=index.js.map