import { Routes } from '@angular/router';
import { PostDashboard } from './shared/components/post-dashboard/post-dashboard';
import { PostForm } from './shared/components/post-form/post-form';
import { PostDetails } from './shared/components/post-details/post-details';

export const routes: Routes = [
    {
        path: '',
        component: PostDashboard
    },
    {
        path: 'posts',
        component: PostDashboard
    },
    {
        path: 'posts/add',
        component: PostForm
    },
    {
        path: 'posts/:id',
        component: PostDetails
    },
    {
        path: 'posts/:id/edit',
        component: PostForm
    }
];
