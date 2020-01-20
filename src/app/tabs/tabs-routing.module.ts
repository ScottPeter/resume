import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'resume',
    component: TabsPage,
    children: [
      {
        path: 'coverletter',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../coverletter/coverletter.module').then(m => m.CoverLetterModule)
          }
        ]
      },
      {
        path: 'skills',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../skills/skills.module').then(m => m.SkillsPageModule)
          }
        ]
      },
      {
        path: 'education',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../education/education.module').then(m => m.EducationPageModule)
          }
        ]
      },
      {
        path: 'hobbies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hobbies/hobbies.module').then(m => m.HobbiesPageModule)
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(m => m.ContactPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/resume/coverletter',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/resume/coverletter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
