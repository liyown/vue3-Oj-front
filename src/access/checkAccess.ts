import access from "@/access/access";
import type {loginUserInfo} from "@/ts-type/my_type";

/**
 * Check if the user has the needed role
 * @param user
 * @param neededRole
 */
export function checkAccess(user: loginUserInfo, neededRole: number): boolean {
    return user.role >= neededRole
}