import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    MatTableModule,
    HeaderComponent
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {

}
