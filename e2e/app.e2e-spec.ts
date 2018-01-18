import { AytraAngularPage } from './app.po';

describe('aytra-angular App', () => {
  let page: AytraAngularPage;

  beforeEach(() => {
    page = new AytraAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
