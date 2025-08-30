import Router from './Router';

export default class Client {
  private router = new Router();

  public findRoute(start: string, end: string, travelMode: string): void {
    if (travelMode === 'car') {
      this.router.buildCarRoute(start, end);
    } else if (travelMode === 'walking') {
      this.router.buildWalkingRoute(start, end);
    } else if (travelMode === 'public_transport') {
      this.router.buildPublicTransportRoute(start, end);
    } else if (travelMode === 'cycling') {
      this.router.buildCyclingRoute(start, end);
    } else if (travelMode === 'tourist') {
      this.router.buildTouristRoute(start, end);
    } else {
      console.log('Invalid travel mode.');
    }
  }
}
