import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dailyQuote: string;
  quotesArray: string[] = [
    'Se il mondo fosse chiaro, l’arte non esisterebbe',
    'Al mondo non c’è coraggio e non c’è paura, ci sono solo coscienza e incoscienza. La coscienza è paura, l’incoscienza è coraggio',
    'Il segreto della creatività è saper nascondere le proprie fonti',
    'La letteratura sta alla poesia come la menzogna alla verità',
    'Le persone non fanno i viaggi, sono i viaggi che fanno le persone.',
    'Un vincitore è semplicemente un sognatore che non si è mai arreso',
    'La violenza è un sintomo di impotenza'
  ];

  ngOnInit() {
    this.setDailyQuote();
  }

  setDailyQuote() {
    this.dailyQuote = this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)];
  }
}
