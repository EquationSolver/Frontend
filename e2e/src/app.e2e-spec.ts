import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Equation Solver');
  });


  it('should display an input field', () => {
    page.navigateTo();
    expect(page.hasInput()).toBe(true);
  });

  function testError(input, result) {
    it(input + ' should ' +(result ? '' : 'not ') + 'result in an error', function() {
      page.submitText(input);
      expect(page.hasError()).toBe(result);
    });
  }

  const input = ["1*", "*1", "d", "\\as", "6*7v+"];
  for(var x = 0; x < input.length; x++) {
    testError(input[x], true);
  }
  const inputs = ["1*1", "d*1", "d+5", "a\\a", "6*7v"];
  for(var x = 0; x < inputs.length; x++) {
    testError(inputs[x], false);
  }


});
