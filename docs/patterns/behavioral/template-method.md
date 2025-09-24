# Template method

- What: defines an skeleton of an algorithm inside a method, transfering some of its steps to subclasses. Avoids duplication between similar classes.
- When: there is a set of classes executing the same steps but with different behavior for each one
- Cons: if there is too much abstract methods, creating new subclasses becomes too complex

## Generic diagram

```mermaid
---
title: Generic diagram
---
classDiagram
direction TB

class AbstractClass {
  <<Abstract>>
  + methodA()
  + methodB()*
  + methodC()*
  + methodD()*
  + templateMethod()
}

class ConcretClassA {
  + methodB()
  + methodC()
  + methodD()
}

class ConcretClassB {
  + methodB()
  + methodC()
  + methodD()
}

class ConcretClassC {
  + methodB()
  + methodC()
  + methodD()
}

AbstractClass <|-- ConcretClassA
AbstractClass <|-- ConcretClassB
AbstractClass <|-- ConcretClassC

```

## Problem - Charge

### Execute

```bash
$ npm run test:patterns:unit -- behavioral/template-method
```

### Class diagram

The payments of each type (Debit, Credit, Cash) can have a default behaviour for fee calculation or have its own calculation. Each type have to implement its own discount calculation. All types have the save behaviour for charging.

```mermaid
---
title: Problem - charge
---
classDiagram
direction TB

class Gateway {
  + charge(value: number) boolean
}

class Payment {
  <<Abstract>>
  - value number
  - gateway Gateway
  + calcFee() number
  + calcDiscount()* number
  + charge(value: number) boolean
}

class Credit {
  + calcFee() number
  + calcDiscount() number
}

class Debit {
  + calcFee() number
  + calcDiscount() number
}

class Cash {
  + calcDiscount() number
}

Gateway <-- Payment
Payment <|-- Credit
Payment <|-- Debit
Payment <|-- Cash
```
