import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private http: HttpClient
    ) {
        this.http.get('http://localhost:3000/api/system-info').subscribe((info) => {
            if (!info) return;
            console.log(info);
          this.ui.system_info = info;
        });
    }

    public ui = {
        system_info: <any> {}
    }
}
