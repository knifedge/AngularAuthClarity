import { InstaAngulrPage } from './app.po';

describe('insta-angulr App', () => {
  let page: InstaAngulrPage;

  beforeEach(() => {
    page = new InstaAngulrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
