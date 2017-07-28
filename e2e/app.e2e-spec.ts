import { TrendingDaysOfCodePage } from './app.po';

describe('trending-days-of-code App', () => {
  let page: TrendingDaysOfCodePage;

  beforeEach(() => {
    page = new TrendingDaysOfCodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
