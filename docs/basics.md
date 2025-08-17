# Basics

## Classes diagrams

### Classes

```mermaid
---
title: Classes
---
classDiagram
direction TB

class ClassName {
    - privateAttr string
    # protectedAttr string
    + publicAttr string
    + publicStaticAttr string$
    - privateMethod() void
    # protectedMethod() void
    + publicMethod() void
    + publicStaticMethod()$

}

class AbstractClassName {
    <<Abstract>>
    - privateAttr string
    # protectedAttr string
    + publicAttr string
    - privateAbstractMethod()* void
    # protectedAbstractMethod()* void
    + publicAbstractMethod()* void
}

class InterfaceName {
    <<Interface>>
    - privateAttr string
    # protectedAttr string
    + publicAttr string
    - privateMethod() void
    - protectedMethod() void
    + publicMethod() void
}
```

### Relationships
#### Association
ClassA depends on ClassB

```mermaid
---
title: Association
---
classDiagram
direction LR

ClassA --> ClassB

```

#### Generalization (Inheritance)
ClassA inherits from ClassB

```mermaid
---
title: Generalization (Inheritance)
---
classDiagram
direction LR

ClassA --|> ClassB

```
#### Realization
ClassA implements ClassB

```mermaid
---
title: Realization
---
classDiagram
direction LR

ClassA ..|> ClassB : implements

```
#### Aggregation
ClassB add funcionalities to ClassA, but ClassA is not strongly bond to ClassB
```typescript
class ClassA {
  method(b: ClassB) {
    //method body
  }
}
```
```mermaid
---
title: Aggregation
---
classDiagram
direction LR

ClassA o-- ClassB

```
#### Composition
ClassB add funcionalities to ClassA, and ClassA is strongly bond to ClassB. If ClassA no longer exists, ClassB won't exist either.
```typescript
class ClassA {
  method(b: ClassB) {
    //method body
  }
}
```
```mermaid
---
title: Composition
---
classDiagram
direction LR

ClassA *-- ClassB

```
