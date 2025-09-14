# Code w/ problem: News agency

This application delivers news using a checking approach. A central source holds news headlines. Customers, such as a news app or a website, get these stories. To manage delivery, the app lets customers sign up to receive news from the source. The app also allows customers to stop their subscription.

## Execute

```bash
$ npm run execute:problem news-agency
```

## Class diagram

```mermaid
---
title: Classes
---
classDiagram
direction TB

class Client {
  - router Router
  + findRoute(start: string, end: string, travelMode: string)
}

class Router {
  + buildCarRoute(start: string, end: string)
  - getCarRoute(start: string, end: string)
  - displayCarRouteOnMap()
  + buildWalkingRoute(start: string, end: string)
  - getWalkingRoute(start: string, end: string)
  - displayWalkingRouteOnMap()
  + buildPublicTransportRoute(start: string, end: string)
  - getPublicTransportRoute(start: string, end: string)
  - displayPublicTransportRouteOnMap()
  + buildCyclingRoute(start: string, end: string)
  - getCyclingRoute(start: string, end: string)
  - displayCyclingRouteOnMap()
  + buildTouristRoute(start: string, end: string)
  - getTouristRoute(start: string, end: string)
  - displayTouristRouteOnMap()
}

Client --> Router

```
