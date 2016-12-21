import { Ng2listingsPage } from './app.po';

describe('ng2listings App', function() {
  let page: Ng2listingsPage;

  beforeEach(() => {
    page = new Ng2listingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
