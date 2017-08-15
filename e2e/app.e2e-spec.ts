import { LotteryPage } from './app.po';

describe('lottery App', () => {
  let page: LotteryPage;

  beforeEach(() => {
    page = new LotteryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
