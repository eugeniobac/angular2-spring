import { Injectable } from '@angular/core';
import { AppSettings } from './app.settings'
import 'rxjs/Rx';

@Injectable()
export class BaseService {
  APP_ROOT = AppSettings.APP_ROOT;

  getAppUrl(url){
      return this.APP_ROOT + url;
  }
}
