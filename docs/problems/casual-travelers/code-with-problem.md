# Code w/ problem: Casual traveler

A navigation application for casual travelers, centered around a beautiful map that helps people quickly orient themselves in any city. The app allows for an address to be entered, displaying the fastest route to that destination on the map. It can build routes for roads, walking, public transportation, cycling, and tourist attractions.

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

## Execute

```bash
$ npm run execute:problem casual-travelers
```

## Tests

### Unit and integration tests

```bash
$ npm run test:problem casual-travelers
```

### Mutation test

```bash
$ npm run test:mutation:problem casual-travelers
```
