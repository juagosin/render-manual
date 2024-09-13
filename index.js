import "#core/load-env.js";
import express from "express";
import path from "path";
import url from "url";
import { createRestApiServer, connectToDBServer } from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";
import { casasApi } from "#pods/casa/index.js";
const restApiServer = createRestApiServer();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));
restApiServer.use(async (req, res, next) => {
    console.log(req.url);
    next();
});
restApiServer.use("/api/casas", casasApi);
restApiServer.use(async (error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});
restApiServer.listen(envConstants.PORT, async () => {
    if (!envConstants.isApiMock) {
        await connectToDBServer(envConstants.MONGODB_URI);
        console.log("Connected to DB");
    }
    else {
        console.log('Running API mock');
    }
    console.log(`Server ready at port ${envConstants.PORT}`);
});
