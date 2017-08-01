import { TextchatPage } from './app.po';

describe('textchat App', () => {
  let page: TextchatPage;

  beforeEach(() => {
    page = new TextchatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
