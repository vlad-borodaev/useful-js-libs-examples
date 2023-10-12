import Koa, { Context, Next } from "koa";
import Router from "@koa/router";
import body from "koa-bodyparser";
import { v4 as uuid } from "uuid";
import db from "./database";

type CreateTenantRequest = {
    name: string;
    adminId: string;
}

const PORT = 3000;

const app = new Koa();

const router = new Router();
router.use(body());

// @TODO: need to implement another middleware with basic auth
// outside of the middleware for tenants

/**
 * A middleware to authorize with tenant only.
 * @function tenantAuthorizationMiddleware
 * @param ctx 
 * @param next 
 * @returns 
 */
const tenantAuthorizationMiddleware = async (
    ctx: Context,
    next: Next
) => {
    const tenantId = ctx.path.split("/")[1];
    if (!tenantId) {
        ctx.status = 400;
        return;
    }

    const user = {
        id: "06acfb69-ce87-4aa6-a945-8047d4a05cd2",
    };
    const tenant = db.tenantAdmins.find(user.id, tenantId);
    if (!tenant) {
        ctx.status = 404;
        return;
    }

    next();
};

router.use(tenantAuthorizationMiddleware);

router.post("/tenants", async ({ request, response }: Context) => {
    if (!request.body) {
        response.status = 401;
        return;
    }

    const { name, adminId } = <CreateTenantRequest>request.body;

    const tenantId = uuid();
    db.tenants.create({ id: tenantId, name });
    db.tenantAdmins.create({
        id: uuid(),
        user_id: adminId,
        tenant_id: tenantId,
    });

    response.status = 200;
});

router.get("/:tenantId/resources", (ctx: Context) => {
    const { tenantId } = ctx.params;

    ctx.status = 200;
    ctx.body = {
        message: `This is a resource from tenant with id ${tenantId}`,
    };
});

app.listen(PORT, () => {
    console.info(`Server is listening on port ${PORT}`);
})