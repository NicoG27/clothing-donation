import { Routes } from '@angular/router';

import {ContactComponent} from "./pages/contact/contact.component";
import {FormComponent} from "./pages/form/form.component";
import {LegalDisclosureComponent} from "./pages/legal-disclosure/legal-disclosure.component";
import {ProjectsComponent} from "./pages/projects/projects.component";

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'impressum', component: LegalDisclosureComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
