import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon Premier poste',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur dolor,' +
      ' eius eos fugiat libero maxime necessitatibus neque nihil officia pariatur porro provident quia quibusdam sit. Optio, vitae.',
    },
    {
      title: 'Mon Second poste',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur dolor,' +
      ' eius eos fugiat libero maxime necessitatibus neque nihil officia pariatur porro provident quia quibusdam sit. Optio, vitae.',
    },
    {
      title: 'Mon Troisieme poste',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur dolor,' +
      ' eius eos fugiat libero maxime necessitatibus neque nihil officia pariatur porro provident quia quibusdam sit. Optio, vitae.',
    }
  ];

}
