import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentThreeComponent } from './components/shared/component-three/component-three.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'main',
		pathMatch: 'full'
	},
	{
		path: 'main',
		component: MainComponent,
		children: [
			{
				path: '',
				redirectTo: 'component-one',
				pathMatch: 'full'
			},
			{
				path: 'component-one',
				component: ComponentOneComponent,
				children: [
					{
						path: '',
						redirectTo: 'component-three',
						pathMatch: 'full'
					},
					{
						path: 'component-three',
						component: ComponentThreeComponent,
					}
				]
			},
			{
				path: 'component-two',
				component: ComponentTwoComponent,
				children: [
					{
						path: '',
						redirectTo: 'component-three',
						pathMatch: 'full'
					},
					{
						path: 'component-three',
						component: ComponentThreeComponent,
					}
				]
			},
		]
	}, {
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

