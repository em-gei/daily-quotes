import { DailyQuotesPage } from './app.po';

describe('daily-quotes App', () => {
  let page: DailyQuotesPage;

  beforeEach(() => {
    page = new DailyQuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
