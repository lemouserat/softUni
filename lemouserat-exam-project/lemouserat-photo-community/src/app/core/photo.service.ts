import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { IPhoto } from './interfaces/photo';
import { Observable } from 'rxjs';


const apiUrl = environment.apiUrl;

@Injectable()

export class PhotoService {

  constructor(private http: HttpClient) { }

  addPhoto$(body: { photoTitle: string, photoUrl: string, photoExif: string}): Observable<IPhoto> {
    return this.http.post<IPhoto>(`${apiUrl}/gallery`, body, {withCredentials: true})
  }
}
