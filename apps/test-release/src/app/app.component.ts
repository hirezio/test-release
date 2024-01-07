import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from '@testRelease/components';
import { utils } from '@testRelease/utils';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentsComponent],
  selector: 'test-release-root',
  template: `
    <div>
      Hey!
      <test-release-components />
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-release' + utils();
}
