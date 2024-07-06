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
      let sum: number = 0;
      this._items.forEach(item => {
        sum += item.price;
      })
      return sum;
    }

    totalPriceWithDiscount(discount: number): number {
      return (this.totalPrice() * (1 - discount / 100))
    }

    removeProduct(id: number | string): void {
      if (this._items.find(item => item.id == id)) {
        const index: number = this._items.findIndex(item => item.id == id);
        this._items.splice(index, 1);
      }
    }
}