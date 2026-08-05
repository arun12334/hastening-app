import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loving-our-neighbor',
  imports: [Header,RouterLink],
  templateUrl: './loving-our-neighbor.html',
  styleUrl: './loving-our-neighbor.scss',
})
export class LovingOurNeighbor {}
