import { Router, Request, Response } from "express";
import { appLayout } from "./appLayout";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.locals.items = appLayout;
    res.render("presentation_view");
});
