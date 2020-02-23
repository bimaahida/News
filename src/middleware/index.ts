import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";

import { handleAPIDocs } from "./swaggerDocs";

export default [handleCors, handleBodyRequestParsing, handleCompression, handleAPIDocs];