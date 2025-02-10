import Order from './Order';

export default class OrderEletronics extends Order {
  private sector: string;

  constructor() {
    super();
    this.sector = 'Eletronics';
  }

  getSector(): string {
    return this.sector;
  }
  setSector(sector: string): void {
    this.sector = sector;
  }
}
