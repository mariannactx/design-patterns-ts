import Router from './Router';

export default class CyclingRouter extends Router {
  public buildRoute(start: string, end: string): void {
    console.log(`Building cycling route from ${start} to ${end}`);
    this.getRoute(start, end);
    this.displayRouteOnMap();
    console.log('Route built successfully for cycling.');
  }

  protected getRoute(start: string, end: string): void {
    console.log(`Getting cycling route from ${start} to ${end}`);
  }

  protected displayRouteOnMap(): void {
    console.log('Displaying cycling route on map');
  }
}
