import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { ControlsComponent } from './controls/controls.component';
import { FileUploaderComponent } from './controls/file-uploader/file-uploader.component';
import { ImageUploaderComponent } from './controls/image-uploader/image-uploader.component';
import { MultipleImageUploaderComponent } from './controls/multiple-image-uploader/multiple-image-uploader.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorComponent } from './editor/editor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'controls', pathMatch: 'full'},
  { path: 'controls', component: ControlsComponent, data: { breadcrumb: 'Form Controls' } },
  { path: 'layouts', component: LayoutsComponent, data: { breadcrumb: 'Layouts' } },
  { path: 'wizard', component: WizardComponent, data: { breadcrumb: 'Wizard' } },
  { path: 'editor', component: EditorComponent, data: { breadcrumb: 'Editor' } }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxBootstrapMultiselectModule,
    NgbModule,
    CKEditorModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ControlsComponent,
    FileUploaderComponent,
    ImageUploaderComponent,
    MultipleImageUploaderComponent,
    LayoutsComponent,
    WizardComponent,
    EditorComponent
  ]
})
export class FormElementsModule { }
