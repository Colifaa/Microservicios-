const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.use("/characters", createProxyMiddleware({

    target: "http://characters:3001",
    changueOrigin: "true"
})

);




app.use("/films", createProxyMiddleware({

    target: "http://films:3002",
    changueOrigin: "true"
})

);





app.use("/planets", createProxyMiddleware({

    target: "http://planets:3003",
    changueOrigin: "true"
})

);

app.listen(3000, () => {
    console.log("getaway on port 3000")
})


