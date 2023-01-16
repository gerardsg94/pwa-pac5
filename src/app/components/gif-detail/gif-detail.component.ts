import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GifDTO } from 'src/app/models/gifDTO.interface';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.css']
})
export class GifDetailComponent implements OnInit {

  gif: GifDTO;
  isLoading: boolean;
  response: any;

  constructor(
    private gifService: GifService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(identifier => {
       
      this.gifService.getGifByID(identifier['id']).subscribe((gif) =>
           { 
            this.response = gif;
            this.gif = this.response.data;
            this.isLoading = false;
            if(!this.gif) {
              return this.router.navigateByUrl('/');
            }
          });
    });
  }



}
