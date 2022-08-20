import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://atos.net/" target="_blank">Atos Sénégal</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://www.instagram.com/atosglobal/" target="_blank" class="ion ion-social-instagram"></a>
      <a href="https://www.facebook.com/Atos/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/Atos/" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/atos/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
