import { Injectable } from '@angular/core';
import { AddSpaceModel } from '../models/Add-space-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Space } from '../models/space.model';
import { UpdateSpace } from '../models/update-space.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }

  
  addSpace(model: AddSpaceModel): Observable<{id: string}> {
    return this.http.post<{id :string}>(
      `https://localhost:7183/api/Spaces`, 
      model
    );
  }

  getAllSpaces(): Observable<Space[]> {
    return this.http.get<Space[]>(
      `https://localhost:7183/api/Spaces`
    );
  }

  deleteSpace(id: string): Observable<any> {
    return this.http.delete(`https://localhost:7183/api/Spaces/${id}`);
  }

  getSpaceById(id: string): Observable<any> {
    return this.http.get(`https://localhost:7183/api/Spaces/${id}`);
  }

  updateSpace(id: string, updateSpace: UpdateSpace): Observable<any> {
    return this.http.put(`https://localhost:7183/api/Spaces/${id}`, updateSpace);
  }
}
