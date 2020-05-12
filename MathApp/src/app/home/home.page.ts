import { Component } from '@angular/core';
import { MathCalculator } from '@ionic-native/math-calculator/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private math: MathCalculator) {}

  testAdd(a, b) {
    let data = {
      'param1': '' + a,
      'param2': '' + b
    };

    this.math.add(data).then(result => {
      alert('Total is : ' + result);
    }).catch(err => {
      alert('Error is : ' + err);
    });
  
  }

  testSubtract(a, b) {
    let data = {
      'param1': '' + a,
      'param2': '' + b
    };

    this.math.subtract(data).then(result => {
      alert('Total is : ' + result);
    }).catch(err => {
      alert('Error is : ' + err);
    });
  }

  testCool(a) {

    this.math.coolMethod(''+a).then(result => {
      alert('Result is : ' + result);
    }).catch(err => {
      alert('Error is : ' + err);
    });
  }


}
