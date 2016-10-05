import { AngularRegPage } from './app.po';

describe('angular-reg App', function() {
  let page: AngularRegPage;

  beforeEach(() => {
    page = new AngularRegPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
