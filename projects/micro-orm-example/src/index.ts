import { EntityManager, RequestContext } from "@mikro-orm/core";
import express, { Request, Response, NextFunction } from "express";
import createOrm from "./orm";

const app = express();

app.use(async (req: Request, resp: Response, next: NextFunction) => {
    const orm = await createOrm();
    // Form entity manager for each request,
    // so their identity map will not collide
    RequestContext.create(orm.em as EntityManager, next);
});