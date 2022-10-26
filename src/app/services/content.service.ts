import { Injectable } from '@angular/core';
import {createClient , Entry} from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  private client = createClient({
    space : environment.spaceId,
    accessToken : environment.accessToken
  });

   getAllEntries(){
    const promise = this.client.getEntries()
    return from(promise)
   }

   getEntryByID(id:string){
    const promise = this.client.getEntry(id)
    return from(promise)
   }

}
