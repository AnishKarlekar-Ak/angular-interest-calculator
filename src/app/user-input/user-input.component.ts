import { Component,  output,  signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

// import { FormsModule } from '@angular/forms';
// import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  // calculate = output<InvestmentInput>();
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredIntialInvestment =signal('0');
  enteredAnnualInvestment =signal('0');
  enteredExpectedReturn = signal('7.5');
  enteredDuration =signal('1');

  constructor(private investmentService : InvestmentService){}


  onSubmit(){
    this.investmentService.CalculateInvestmentResults({
      initialInvestment:+this.enteredIntialInvestment() ,
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      annualInvestment:+this.enteredAnnualInvestment()
     })
  //  this.calculate.emit({
  //   initialInvestment:+this.enteredIntialInvestment() ,
  //   duration:+this.enteredDuration(),
  //   expectedReturn:+this.enteredExpectedReturn(),
  //   annualInvestment:+this.enteredAnnualInvestment()
  //  });
   this.enteredIntialInvestment.set('0');
   this.enteredExpectedReturn.set('0');
   this.enteredAnnualInvestment.set('0');
   this.enteredDuration.set('0');
  }
}
