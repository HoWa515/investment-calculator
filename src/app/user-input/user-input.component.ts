import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  enteredInitial = '0';
  enteredAnnual = '0';
  enteredReturn = '5';
  enteredDuration = '10';

  submitForm() {
    console.log('submited');
    this.calculate.emit({
      initialInvestment: +this.enteredInitial,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredReturn,
      annualInvestment: +this.enteredAnnual,
    });
  }
}
