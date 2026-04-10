import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ResultItem = {
  label: string;
  value: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue: number | null = null;
  baseResults: ResultItem[] = [];
  extraResults: ResultItem[] = [];
  showExtras = false;

  calcolaBase(): void {
    if (this.inputValue === null || Number.isNaN(this.inputValue)) {
      this.baseResults = [];
      this.extraResults = [];
      return;
    }

    this.baseResults = this.calculatePercentages(this.inputValue, [95, 105]);

    if (this.showExtras) {
      this.extraResults = this.calculatePercentages(this.inputValue, [107, 90, 80, 50, 30, 101.5, 98.5]);
    }
  }

  toggleAltri(): void {
    this.showExtras = !this.showExtras;

    if (!this.showExtras || this.inputValue === null || Number.isNaN(this.inputValue)) {
      this.extraResults = [];
      return;
    }

    this.extraResults = this.calculatePercentages(this.inputValue, [107, 90, 80, 50, 30, 101.5, 98.5]);
  }

  private calculatePercentages(base: number, percentages: number[]): ResultItem[] {
    return percentages.map((percentage) => ({
      label: `${this.formatPercentage(percentage)}%`,
      value: (base * percentage) / 100
    }));
  }

  private formatPercentage(value: number): string {
    if (Number.isInteger(value)) {
      return value.toString();
    }

    return value.toString().replace('.', ',');
  }

  formatValue(value: number): string {
    return new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(value);
  }
}
