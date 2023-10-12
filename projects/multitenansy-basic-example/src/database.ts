const MOCKED_USERS = {
    create: ({
        id,
        first_name,
        last_name,
    }: {
        id: string;
        first_name: string;
        last_name: string;
    }) => {
        console.log("User created!");
    },
    find: (id: string) => ({
        id: "06acfb69-ce87-4aa6-a945-8047d4a05cd2",
        first_name: "John",
        last_name: "Doe",
    }),
};

const MOCKED_TENANTS = {
    create: ({ id, name }: { id: string; name: string }) => {
        console.log("Tenant created!");
    },
    find: (id: string) => ({
        id: "7b190e2e-8071-4d45-8196-57f5c0baa4e7",
        name: "Volca",
    }),
};

const MOCKED_TENANT_ADMINS = {
    create: ({
        id,
        tenant_id,
        user_id,
    }: {
        id: string;
        tenant_id: string;
        user_id: string;
    }) => {
        console.log("Tenant admin created!");
    },
    find: (user_id: string, tenant_id: string) => ({
        id: "6758e69a-5f17-47eb-923e-e0a0ceef13e0",
        user_id: "06acfb69-ce87-4aa6-a945-8047d4a05cd2",
        tenant_id: "7b190e2e-8071-4d45-8196-57f5c0baa4e7",
    }),
};

const MOCKED_DATABASE = {
    users: MOCKED_USERS,
    tenants: MOCKED_TENANTS,
    tenantAdmins: MOCKED_TENANT_ADMINS,
};

export default MOCKED_DATABASE;