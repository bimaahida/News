import { Request, Response } from "express";

export default [
    {
        path: "",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const result = "Welcome To Api Mkoran";
                res.status(200).send(result);
            }
        ]
    }
]