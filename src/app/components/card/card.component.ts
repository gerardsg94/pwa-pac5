import { Component, OnInit, Input } from '@angular/core';
import { GifDTO } from 'src/app/models/gifDTO.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
