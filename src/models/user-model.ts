import users from '../database/users.json';
import { writeFile } from 'jsonfile';
import { randomUUID } from 'node:crypto';

abstract class UserModel {
    static async getAll() {
		return users;
    }
}
export default UserModel;