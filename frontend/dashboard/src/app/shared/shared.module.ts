import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchOptionsComponent } from './components/search-options/search-options.component';
import { BtnThemeComponent } from './components/btn-theme/btn-theme.component';
import { MaterialModule } from './material/material.module';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchOptionsComponent,
    BtnThemeComponent,
    LandingPageComponent,
    CapitalizeFirstLetterPipe,
    ModalComponent,
    TableComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    HomeComponent,
    HeaderComponent,
    SearchOptionsComponent,
    BtnThemeComponent,
    LandingPageComponent,
  ],
})
export class SharedModule {}
