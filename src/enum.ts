/**
Enum allows creating key value pair without initializing key as well
*/
enum Role {admin = "admin", hero, superadmin};
/** Compiles to
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role[Role["hero"] = void 0] = "hero";
    Role[Role["superadmin"] = void 0] = "superadmin";
})(Role || (Role = {}));
*/
