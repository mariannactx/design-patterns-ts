import Router from './Router';
import CarRouter from './CarRouter';
import CyclingRouter from './CyclingRouter';
import PublicTransportRouter from './PublicTransportRouter';
import TouristicRouter from './TouristicRouter';
import WalkingRouter from './WalkingRouter';
import { modes } from './modes';

export default class Client {
  private routerFactory: Record<modes, () => Router> = {
    car: () => new CarRouter(),
    walking: () => new WalkingRouter(),
    publicTransport: () => new PublicTransportRouter(),
    cycling: () => new CyclingRouter(),
    touristic: () => new TouristicRouter(),
  };

  public buildRoute(start: string, end: string, mode: modes): void {
    const router = this.routerFactory[mode]();
    router.buildRoute(start, end);
  }
}
