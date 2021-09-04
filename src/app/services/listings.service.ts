import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Listing } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const httpOptionsWithAuthToken = token => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken': token
  })
});

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  listings: Listing[] = [];

  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
    {}, httpOptions);
  }

  getListingsForUser(): Observable<Listing[]> {
    let userId = '12345';
    return this.http.get<Listing[]>(`api/listings/${userId}/listings`);
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`api/listings/${id}`);
  }

  createNewListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings`, { name, description, price }, httpOptions);
  }

  updatedListing(id: string, name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}`, { name, description, price }, httpOptions);
  }

}
