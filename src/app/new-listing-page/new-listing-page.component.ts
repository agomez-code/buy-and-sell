import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from './../services/listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

  listing: Listing;

  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit( { name, description, price } ): void {
    alert(`Creating a new listing...`);
    this.listingsService.createNewListing(name, description, price).subscribe(() => {
      this.router.navigateByUrl('/my-listings');
    })

  }

}
