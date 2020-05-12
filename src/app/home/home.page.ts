import { Component } from '@angular/core';
import { RadioPlayerService } from '../radio/radio-player.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [RadioPlayerService]
})
export class HomePage {
    isPlaying: boolean = false;
    isMute: boolean = false;

    constructor(public player: RadioPlayerService) { }

    play() {
        this.player.play().then(() => {
            this.isPlaying = true;
        });
    }

    pause() {
        this.player.pause();
        this.isPlaying = false;
    }

    mute() {
        this.player.mute();
        this.isMute = true;
    }

    unmute() {
        this.player.unmute();
        this.isMute = false;
    }

    goTo(redSocial) {
        switch (redSocial) {
            case 'facebook':
                window.location.href = environment.urlFacebook;
                break;
            case 'instagram':
                window.location.href = environment.urlInstagram;
                break;
            case 'whatsapp':
                window.location.href = environment.urlWhatsapp;
                break
            case 'twitter':
                window.location.href = environment.urlTwitter;
                break
            default:
                break;
        }
    }
}
