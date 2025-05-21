import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceImage } from '../models/space.model';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {


  constructor(private http: HttpClient) { }

  uploadImage(spaceId: string, formData: FormData): Observable<SpaceImage> {
    return this.http.post<SpaceImage>(`https://localhost:7183/api/SpaceImages/upload/${spaceId}`, formData);
  }

  getSpaceImages(spaceId: string): Observable<SpaceImage[]> {
    return this.http.get<SpaceImage[]>(`https://localhost:7183/api/SpaceImages/${spaceId}/images`);
  }

  deleteImage(imageId: string): Observable<any> {
    return this.http.delete(
      `https://localhost:7183/api/SpaceImages/${imageId}`
    );
  }
}
