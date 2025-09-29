# Strategy

- What: defines a dependency one-to-many between objects, so that when an object changes its state, all its dependents are notified and updated automatically
- When: when there's many objects expecting changes from another object and there's no control of how many objects need to be updated.
- Cons: can cause unexpected side effects

## Generic diagram

```mermaid
---
title: Generic diagram
---
classDiagram
direction TB

class Subject {
  + subscribe(observer: Observer) void
  + unsubscribe(observer: Observer) void
  + notifyAll() void
}
<<Interface>> Subject

class SubjectA {
  - observerCollection Observer[]
  + subscribe(observer: Observer) void
  + unsubscribe(observer: Observer) void
  + notifyAll() void
  + getState()
  + setState() void
}

class Observer {
  + update(data: any) void
}
<<Interface>> Observer

class ObserverA {
  - subject Subject
  + update(data: any) void
}

class ObserverB {
  - subject Subject
  + update(data: any) void
}

SubjectA ..|> Subject
ObserverA ..|> Observer
ObserverB ..|> Observer
Subject --> Observer
ObserverA --> SubjectA
ObserverB --> SubjectA

```

## Problem - Newsletter

### Class diagram

```mermaid
---
title: Problem - Newsletter
---
classDiagram
direction BT

class Subject {
 + subscribe(Observer o) void
 + unsubscribe(Observer o) void
 + notifyAll() void
}
<<Interface>> Subject

class Newsletter {
  - observers Observer[]
  - messages string[]
  + subscribe(observer Observer) void
  + unsubscribe(observer Observer) void
  + notifyAll() void
  + addMessage() void
}

class Observer {
  + update(message: string) void
  + getName() void
  + getEmail() void
}
<<Abstract>> Observer

class Client {
  - name string
  - email string
  - subject Subject
  + update(message: string) void
  + getName() void
  + getEmail() void
}

class Supplier {
  - name string
  - email string
  - subject Subject
  + update(message: string) void
  + getName() void
  + getEmail() void
}

class Employee {
  - name string
  - email string
  - subject Subject
  + update(message: string) void
  + getName() void
  + getEmail() void
}

class Partner {
  - name string
  - email string
  - subject Subject
  + update(message: string) void
  + getName() void
  + getEmail() void
}


Newsletter ..|> Subject
Subject --> Observer

Client --|> Observer
Supplier --|> Observer
Employee --|> Observer
Partner --|> Observer

Client --> Newsletter
Supplier --> Newsletter
Employee --> Newsletter
Partner --> Newsletter
```

### Tests

#### Unit and integration tests

```bash
$ npm run test:pattern behavioral/observer
```

#### Mutation test

```bash
$ npm run test:mutation:pattern behavioral/observer
```
