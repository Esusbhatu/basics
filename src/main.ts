import { enableProdMode } from "@angular/core";
import { platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

import{ AppModule} from './app/app.module';
import {environment} from './environments/environment';

if(environment.production){
    enableProdMode();
}
platformBrowserDynamicTesting().bootstrapModule(AppModule)
.catch(err => console.error(err));

