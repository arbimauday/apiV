const app = require("./server/app");
const http = require("http");
const port = process.env.PORT || 8800;

app.listen(port, function() { // this is the number of server ports we use
    console.log('Server running on http://localhost:8800')
})
module.export = app;