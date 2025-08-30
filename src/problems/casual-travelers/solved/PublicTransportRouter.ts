import Router from './Router';

export default class PublicTransportRouter extends Router {
  public buildRoute(start: string, end: string): void {
    console.log(`Building walking route from ${start} to ${end}`);
    this.getRoute(start, end);
    this.displayRouteOnMap();
    console.log('Route built successfully for public transport.');
  }

  protected getRoute(start: string, end: string): void {
    console.log(`Getting public transport route from ${start} to ${end}`);
  }

  protected displayRouteOnMap(): void {
    console.log('Displaying public transport route on map');
  }
}
