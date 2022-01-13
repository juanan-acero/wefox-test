import Page from './page';

class HomePage extends Page {

  get firstModalContinueButton() { return $('//*[@id="root"]/div[5]/div/div/div[1]/div[1]/div/button')  }

  get cookieModalAcceptButton() { return $('/html/body/div[4]/div/aside/div/div/div[3]/div[1]/button[2]')  }

  get searchButton() { return $('//*[@id="root"]/div[2]/header/div[2]/div[2]/div/div[5]/div/button')  }

  get searchBarInput() { return $('#desktop-search-search-input')  }

  get firstResultItemName() { return $('/html/body/div[1]/div[2]/header/div[2]/div[2]/div/div[5]/div/div/div[3]/div[2]/form/div/ul/li[1]/a/div/div/p[1]') }

  get firstResultItemElement() { return $('//*[@id="desktop-search-search-suggestions"]/li[1]/a')  }
  
  clickAllCookiesAndModals() {
    this.firstModalContinueButton.click();
    this.cookieModalAcceptButton.click();
  }

  performSearch(text) {
    this.searchButton.click();
    this.searchBarInput.setValue(text);
  }

  goToFirstResultItemPage() {
    this.firstResultItemElement.click();
  }

  open() {
    super.open('home');
    return this;
  }
}

export default new HomePage();
