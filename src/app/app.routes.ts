import { Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {LegalDisclosureComponent} from "./legal-disclosure/legal-disclosure.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'impressum', component: LegalDisclosureComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
