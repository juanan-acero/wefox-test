import { assert, expect } from 'chai';
import homePage from '../pages/home.page';
import ItemPage from '../pages/item.page';

describe('WeFox UI Automation Test Scenario 2', async function() {

  it('Add BB-8 Keychain to Cart', async function() {
    
    homePage.open();
    await browser.pause(3000);
    await homePage.clickAllCookiesAndModals();
    await browser.pause(3000);
    await homePage.performSearch('llavero con linterna bb');
    await browser.pause(4000);
    expect(await homePage.firstResultItemName).to.exist;
    expect(await homePage.firstResultItemName.getText()).to.equal('Llavero de BB-8™ LEGO® <i>Star Wars</i>™');
    await homePage.goToFirstResultItemPage();

    await browser.pause(3000);
    expect(await ItemPage.itemName.getText()).to.equal('Llavero de BB-8™ LEGO® Star Wars™');
    await ItemPage.addItemToCart();
    await browser.pause(3000);
    expect(await ItemPage.confirmationModalTitle.getText()).to.equal('Añadido a la bolsa');

  });
});
