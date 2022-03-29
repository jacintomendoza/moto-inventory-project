import { Component, OnInit } from '@angular/core';
import { MotoService } from '../moto.service';
import { Moto } from '../moto.model';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent implements OnInit {
  motos: Moto[] = [];

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.getMotos().subscribe((motos) => {
      this.motos = motos;
    })
  }

  searchVin(searchTerm: string) {
    this.motoService.searchVin(searchTerm).subscribe(payload => {
      this.motos = payload;
    })
  }

}