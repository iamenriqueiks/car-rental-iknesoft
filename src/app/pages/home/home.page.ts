import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    cards = [
        {
            title: 'Card 01',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Atque eaque incidunt quam quas. Commodi, culpa cupiditate dolor dolore
        fugit labore modi nesciunt officia omnis perspiciatis, provident reiciendis?
        Autem, dolor molestias.`
        },
        {
            title: 'Card 02',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Atque eaque incidunt quam quas. Commodi, culpa cupiditate dolor dolore
        fugit labore modi nesciunt officia omnis perspiciatis, provident reiciendis?
        Autem, dolor molestias.`
        },
        {
            title: 'Card 03',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Atque eaque incidunt quam quas. Commodi, culpa cupiditate dolor dolore
        fugit labore modi nesciunt officia omnis perspiciatis, provident reiciendis?
        Autem, dolor molestias.`
        },
    ];

    constructor(private alertController: AlertController) {
    }

    onTouched() {
        console.log('Toolbar button touched!');
    }

    async openAlert(card) {
        const alert = await this.alertController.create({
            header: 'Hello world!',
            message: 'This is the message prompted by ' + card.title,
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Bye!', handler() {
                        setTimeout(() => {
                            alert.dismiss();
                            console.log('bye pues!');
                        }, 2000);
                        return false;
                    }
                }
            ]
        });

        await alert.present();
    }
}
