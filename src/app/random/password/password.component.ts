// import * as crypto from 'crypto';

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // https://en.wikipedia.org/wiki/Random_password_generator
  private generate(length = 16): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const all = uppercase + lowercase + numbers + symbols;
    let password = '';
    for (let index = 0; index < length; index++) {
      const randomNumber = crypto.randomInt(all.length);
      password += all.charAt(randomNumber);
    }
    return password;
  }
}
