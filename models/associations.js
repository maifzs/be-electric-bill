import { Customer } from "./associations.js";
import { Billing } from "./associations.js";
import { User } from "./associations.js";
import { Tariff } from "./associations.js";

export { default as User } from "./user.js";
export { default as Tariff } from "./tariff.js";
export { default as Customer } from "./customer.js";
export { default as Billing } from "./billing.js";

User.hasMany(Tariff);
Tariff.belongsTo(User, {
    foreignKey: 'user_id'
});

Tariff.hasMany(Customer);
Customer.belongsTo(Tariff, {
    foreignKey: 'tariff_id'
});

Customer.hasMany(Billing);
Billing.belongsTo(Customer, {
    foreignKey: 'customer_id'
});