// import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject} from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input()
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested:number}[]>()

  private investmentService = inject(InvestmentService);

  // get results(){
  //   return this.investmentService.resultData;
  // }

  results = computed(()=> this.investmentService.resultData());

  // results = this.investmentService.resultData.asReadonly();
}
