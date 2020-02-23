import newsRoutes from "./news/router";
import defaultRouters from "./default/router";

export default [
    ...defaultRouters,
    ...newsRoutes
];