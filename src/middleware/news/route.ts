import { Request,Response } from "express";
import { getPlacesByName } from "../../services/news/NewsController";
import { checkNewsParams } from "../../middleware/checks";

export default [
    {
        path: "/api/v1/news",
        method: "GET",
        handler: [
            checkNewsParams,
            async ({ query }: Request, res: Response) => {
                const result = await getPlacesByName(query.q);
                res.status(200).send(result);
            }
        ]
    }
]