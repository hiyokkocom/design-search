import { DesignSearch2Page } from './app.po';

describe('design-search2 App', function() {
  let page: DesignSearch2Page;

  beforeEach(() => {
    page = new DesignSearch2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
