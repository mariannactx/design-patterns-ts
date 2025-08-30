export default class Router {
  public buildCarRoute(start: string, end: string): void {
    console.log(`Building car route from ${start} to ${end}.`);
    this.getCarRoute(start, end);
    this.displayCarRouteOnMap();
    console.log('Route built successfully for cars.');
  }

  private getCarRoute(start: string, end: string): void {
    console.log('Getting fastest car route.');
  }

  private displayCarRouteOnMap(): void {
    console.log('Displaying car route on map.');
  }

  public buildWalkingRoute(start: string, end: string): void {
    console.log(`Building walking route from ${start} to ${end}.`);
    this.getWalkingRoute(start, end);
    this.displayWalkingRouteOnMap();
    console.log('Route built successfully for pedestrians.');
  }

  private getWalkingRoute(start: string, end: string): void {
    console.log('Getting fastest walking route.');
  }

  private displayWalkingRouteOnMap(): void {
    console.log('Displaying walking route on map.');
  }

  public buildPublicTransportRoute(start: string, end: string): void {
    console.log(`Building public transport route from ${start} to ${end}.`);
    this.getPublicTransportRoute(start, end);
    this.displayPublicTransportRouteOnMap();
    console.log('Route built successfully for public transport.');
  }

  private getPublicTransportRoute(start: string, end: string): void {
    console.log('Getting fastest public transport route.');
  }

  private displayPublicTransportRouteOnMap(): void {
    console.log('Displaying public transport route on map.');
  }

  public buildCyclingRoute(start: string, end: string): void {
    console.log(`Building cycling route from ${start} to ${end}.`);
    this.getCyclingRoute(start, end);
    this.displayCyclingRouteOnMap();
    console.log('Route built successfully for cyclists.');
  }

  private getCyclingRoute(start: string, end: string): void {
    console.log('Getting safest cycling route.');
  }

  private displayCyclingRouteOnMap(): void {
    console.log('Displaying cycling route on map.');
  }

  public buildTouristRoute(start: string, end: string): void {
    console.log(`Building tourist route from ${start} to ${end}.`);
    this.getTouristRoute(start, end);
    this.displayTouristRouteOnMap();
    console.log('Route built successfully for tourists.');
  }

  private getTouristRoute(start: string, end: string): void {
    console.log('Getting scenic tourist route.');
  }

  private displayTouristRouteOnMap(): void {
    console.log('Displaying tourist route on map.');
  }
}
