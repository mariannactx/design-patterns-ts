import Order from './Order';

class OrderFurniture extends Order {
  private sector: string;

  constructor() {
    super();
    this.sector = 'Furniture';
  }

  getSector(): string {
    return this.sector;
  }
  setSector(sector: string): void {
    this.sector = sector;
  }
}
