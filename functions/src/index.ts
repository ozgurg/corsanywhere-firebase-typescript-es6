import * as functions from "firebase-functions";

// @ts-ignore
// TypeScript can't see it is installed for some reason, but it works
import * as corsAnywhere from "cors-anywhere";

const corsAnywhereServer = corsAnywhere.createServer({
    requireHeader: ["origin", "x-requested-with"],
});

export const cors = functions.https.onRequest((request, response) => {
    corsAnywhereServer.emit("request", request, response);
});
