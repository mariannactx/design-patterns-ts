export default class Gateway {
  public charge(value: number, random: boolean = false): number {
    if (!random) {
      return value;
    }

    const result = [true, false];
    const randomIndex = Math.floor(Math.random() * result.length);
    if (result[randomIndex]) {
      return value;
    }

    throw new Error('Charge not processed');
  }
}
