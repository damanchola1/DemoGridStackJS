import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  checked = false
  modo = "Modo Claro"

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  changeTheme() {
    let theme = this.document.getElementById('app-theme') as HTMLLinkElement
    if (theme) {
      theme.href = this.checked ? 'dark.css' : 'light.css'
      this.modo = this.checked ? 'Modo Oscuro' : 'Modo Claro'
    }

  }


}
