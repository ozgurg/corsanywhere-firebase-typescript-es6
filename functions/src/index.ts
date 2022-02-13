import * as functions from "firebase-functions";

// @ts-ignore
// TypeScript module can't see it for some reason, but it works
import * as corsProxy from "cors-anywhere";

const corsAnywhere = corsProxy.createServer({
    requireHeader: ["origin", "x-requested-with"],
});

export const cors = functions.https.onRequest((request, response) => {
    corsAnywhere.emit("request", request, response);
});
