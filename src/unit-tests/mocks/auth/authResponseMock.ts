import { LoginResponse } from '../../../app/types';

export const authSuccessfulResponseMock: LoginResponse = {
    success: true,
    errors: undefined,
    token: 'test-token',
};
