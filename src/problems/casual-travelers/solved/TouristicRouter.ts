import Router from './Router';

export default class TouristicRouter extends Router {
  public buildRoute(start: string, end: string): void {
    console.log(`Building cycling route from ${start} to ${end}`);
    this.getRoute(start, end);
    this.displayRouteOnMap();
    console.log(`Route built successfully for city's tourist attractions.`);
  }

  protected getRoute(start: string, end: string): void {
    console.log(`Getting touristic route from ${start} to ${end}`);
  }

  protected displayRouteOnMap(): void {
    console.log('Displaying touristic route on map');
  }
}
