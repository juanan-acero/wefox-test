import Page from './page';

class ItemPage extends Page {

  get itemName() {
    return $('//*[@id="main-content"]/div/div[1]/div/div[2]/div[2]/h1');
  }

  get addToCartButton() {
    return $('//*[@id="main-content"]/div/div[1]/div/div[2]/div[5]/div[1]/div/div/div/button');
  }
  
  get confirmationModalTitle() {
    return $('/html/body/div[5]/div/aside/div/div[2]/div[1]/h2');
  }

  addItemToCart() {
    this.addToCartButton.click();
  }

  open() {
    super.open('product/lego-star-wars-bb-8-keyring-853604');
    return this;
  }
}

export default new ItemPage();
