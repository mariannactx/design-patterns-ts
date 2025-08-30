import Router from './Router';

export default class CarRouter extends Router {
  public buildRoute(start: string, end: string): void {
    console.log(`Building car route from ${start} to ${end}`);
    this.getRoute(start, end);
    this.displayRouteOnMap();
    console.log('Route built successfully for cars.');
  }

  protected getRoute(start: string, end: string): void {
    console.log(`Getting car route from ${start} to ${end}`);
  }

  protected displayRouteOnMap(): void {
    console.log('Displaying car route on map');
  }
}
