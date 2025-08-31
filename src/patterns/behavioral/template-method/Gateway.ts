export default class Gateway {
  public charge(value: number): number {
    const result = [true, false];
    const randomIndex = Math.floor(Math.random() * result.length);

    if (result[randomIndex]) {
      return value;
    }

    throw new Error('Charge not processed');
  }
}
