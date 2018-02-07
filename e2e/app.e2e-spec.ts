import { UBv3Page } from './app.po';

describe('ubv3 App', () => {
  let page: UBv3Page;

  beforeEach(() => {
    page = new UBv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
