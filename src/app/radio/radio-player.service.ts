import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RadioPlayerService {
    url: string;
    stream: any;
    promise: any;

    constructor() {
        this.url = environment.urlRadio;
        this.stream = new Audio(this.url);
    };

    play() {
        this.stream.play();
        this.promise = new Promise((resolve, reject) => {
            this.stream.addEventListener('playing', () => {
                resolve(true);
            });

            this.stream.addEventListener('error', () => {
                reject(false);
            });
        });
        return this.promise;
    };

    pause() {
        this.stream.pause();
    };

    mute() {
        this.stream.volume = 0;
    }

    unmute() {
        this.stream.volume = 1;
    }
}
