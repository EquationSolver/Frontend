import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  hasInput(){
    return element(by.css("input")).isPresent();
  }
  hasError(){
    return element(by.css("#error")).isPresent();
  }
  submitText(text){
    element(by.css("input")).sendKeys(text);
    element(by.css("input")).sendKeys('\n');
    element(by.css("input")).clear();
  }

}
