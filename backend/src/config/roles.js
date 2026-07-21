const roles = {

    admin: {
        name: "مدير النظام",
        permissions: [
            "users_manage",
            "customers_manage",
            "packages_manage",
            "subscriptions_manage",
            "billing_manage",
            "reports_view",
            "settings_manage"
        ]
    },


    employee: {
        name: "موظف",
        permissions: [
            "customers_view",
            "customers_add",
            "subscriptions_view"
        ]
    },


    collector: {
        name: "محصل",
        permissions: [
            "payments_add",
            "payments_view",
            "customers_view"
        ]
    },


    support: {
        name: "دعم فني",
        permissions: [
            "customers_view",
            "tickets_manage",
            "mikrotik_view"
        ]
    }

};


module.exports = roles;
