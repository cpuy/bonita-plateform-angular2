import { BonitaPlatformPortalPage } from './app.po';

describe('bonita-platform-portal App', function() {
  let page: BonitaPlatformPortalPage;

  beforeEach(() => {
    page = new BonitaPlatformPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
