export default abstract class Router {
  public abstract buildRoute(start: string, end: string): void;
  protected abstract getRoute(start: string, end: string): void;
  protected abstract displayRouteOnMap(): void;
}
