import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GifDTO } from 'src/app/models/gifDTO.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() item: MatTableDataSource<GifDTO>;

  displayedColumns: string[] = ['Title', 'Gif', 'Autor'];

  constructor() { }

  ngOnInit(): void {
  }

}
