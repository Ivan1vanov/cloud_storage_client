import { appRoutesPath } from '../../../../constants';
import { HeaderRouteData } from '../types';

export const headerProfileRoutes: HeaderRouteData[] = [
    {
        name: 'Home',
        routePath: appRoutesPath.home,
    },
    {
        name: 'Upload file',
        routePath: appRoutesPath.file.upload,
    },
    {
        name: 'My files',
        routePath: appRoutesPath.file.my,
    },
    {
        name: 'Shared fiels',
        routePath: '#',
    },
]

export const headerGuestRoutes: HeaderRouteData[] = [
    {
        name: 'Sign in',
        routePath: appRoutesPath.login,
    }
]