import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  linkInstagram="https://www.instagram.com/road.to.junior/"
  linkLinkedin="https://www.linkedin.com/in/denys-skobalo-855450246/"
  linkTelegram="https://t.me/micotoyami"

  constructor() { }

  ngOnInit(): void {
  }

}
