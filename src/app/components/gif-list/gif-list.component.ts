import { Component, OnInit } from '@angular/core';
import { GifDTO } from 'src/app/models/gifDTO.interface';
import { GifService } from 'src/app/services/gif.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-team-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {
  dataSource: MatTableDataSource<GifDTO>;
  gifs: GifDTO[];
  table: boolean = false;
  cards: boolean = true;
  isLoading: boolean;
  response: any;

  constructor(private gifService: GifService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.gifService
    .getAllGifs()
    .subscribe((gifs) => {
      this.response = gifs;
      this.dataSource = new MatTableDataSource(this.response.data);
      this.gifs = this.response.data;
      this.isLoading = false;
    });
    
  }

  showTableOrCard(): boolean {
   if(this.table) {
    this.table = false;
    this.cards = true;
    return this.cards;
    
   }
   
    this.table = true;
    this.cards = false;
    return this.table;
  }

}
