import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from '@release-experiments/components';
import { utils } from '@release-experiments/utils';
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
