import Router from './Router';

export default class WalkingRouter extends Router {
  public buildRoute(start: string, end: string): void {
    console.log(`Building walking route from ${start} to ${end}`);
    this.getRoute(start, end);
    this.displayRouteOnMap();
    console.log('Route built successfully for walking.');
  }

  protected getRoute(start: string, end: string): void {
    console.log(`Getting walking route from ${start} to ${end}`);
  }

  protected displayRouteOnMap(): void {
    console.log('Displaying walking route on map');
  }
}
