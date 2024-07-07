import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
      return this._items.reduce((sum, item) => {return sum + item.price }, 0);
    }

    totalPriceWithDiscount(discount: number): number {
      return (this.totalPrice() * (1 - discount / 100))
    }

    removeProduct(id: number | string): void {
      this._items = this._items.filter(item => {return item.id != id });
    }
}