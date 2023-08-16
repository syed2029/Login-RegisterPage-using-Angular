import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
const routes: Routes = [
  { path: 'welcome', component: RouterModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    NzAnchorModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzSliderModule,
    NzCollapseModule,
  NzButtonModule,
NzIconModule,
NzToolTipModule,
]
})
export class WelcomeRoutingModule { }


