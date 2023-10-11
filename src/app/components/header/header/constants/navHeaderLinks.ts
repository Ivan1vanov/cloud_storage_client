import { appRoutesPath } from '../../../../constants';
import { HeaderRouteData } from '../types';

export const headerProfileRoutes: HeaderRouteData[] = [
    {
        name: 'Home',
        routePath: '#',
    },
    {
        name: 'My fiels',
        routePath: '#',
    },
    {
        name: 'Shared fiels',
        routePath: '#',
    },
    {
        name: 'Statistic',
        routePath: '#',
    },
]

export const headerGuestRoutes: HeaderRouteData[] = [
    {
        name: 'Sign in',
        routePath: appRoutesPath.login,
    }
]