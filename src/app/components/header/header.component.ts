import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private gifService: GifService ) { }

  ngOnInit(): void {

  }

}
