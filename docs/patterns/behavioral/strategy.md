# Strategy

- What: it creates a family of algorithms that can be exchanged, that is, using one family member in place of another, depending on the needs of those who use them.
- When: many classes do the same thing in different ways.
- Cons: when the family of algorithms is too big, communication costs can be a problem.

## Generic diagram

```mermaid
---
title: Generic diagram
---
classDiagram
direction TB

class Context {
    - Strategy strategy
    + setStrategy(strategy: Strategy) void
    + request()
}

class Strategy {
    << Interface >>
    + behavior()
}

class StrategyA {
    + behavior()
}

class StrategyB {
    + behavior()
}

class StrategyC {
    + behavior()
}

Context o-- Strategy
Strategy <|.. StrategyA
Strategy <|.. StrategyB
Strategy <|.. StrategyC
```

## Problem - Shipping calculation

### Class diagram

The orders of each sector (eletronics, furniture, etc) can have different shipping calculations (shipping family: common, express, etc)

```mermaid
---
title: Problem - Shipping calculation
---
classDiagram
direction TB
    class Order {
	    - value number
	    - shipping Shipping
	    + getValue() number
	    + setValue(value: number) void
	    + setShipping(shipping: Shipping) void
	    + calculateShipping() number
    }
    class OrderEletronics {
	    - sector string
	    + getSector() string
	    + setSector(sector: string) void
    }
    class OrderFurniture {
	    - sector string
	    + getSector() string
	    + setSector(sector: string) void
    }
    class Shipping {
	    + calculate(value: number) number
    }
    class ShippingCommon {
	    + calculate(value: number) number
    }
    class ShippingExpress {
	    + calculate(value: number) number
    }
	<<Abstract>> Order
	<<Interface>> Shipping
    Order <|-- OrderEletronics
    Order <|-- OrderFurniture
    Shipping <|.. ShippingCommon
    Shipping <|.. ShippingExpress
    Order o-- Shipping

```

### Tests

#### Unit and integration tests

```bash
$ npm run test:pattern behavioral/strategy
```

#### Mutation test

```bash
$ npm run test:mutation:pattern behavioral/strategy
```
