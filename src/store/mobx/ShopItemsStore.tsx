import { makeObservable, observable, action, computed } from 'mobx';
import { ShopCardType } from '@/@types/types';
import { getShopItems } from '@/services/getShopItems';

class ShopItemsStore {
  shopItems: ShopCardType[] = [];

  constructor() {
    /*
    * this way automate generate observable
    makeAutoObservable(this);
    */
    makeObservable(this, {
      shopItems: observable,
      loadShopItems: action,
      shopItemsList: computed,
    });
  }

  loadShopItems(): void {
    getShopItems().then((shopItem) => (this.shopItems = shopItem));
  }

  get shopItemsList(): ShopCardType[] {
    return this.shopItems;
  }
}

const shopItemsStore = new ShopItemsStore();
export default shopItemsStore;
