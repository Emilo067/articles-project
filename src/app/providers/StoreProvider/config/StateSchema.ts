import { UserSchema } from 'entities';
import { LoginSchema } from 'features';

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema
}
