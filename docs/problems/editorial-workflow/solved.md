# Solved: Editorial workflow

## Class Diagram

```mermaid
---
title: Classes
---
classDiagram
direction TB

class Article {
  + title string
  + content string
  - state ArticleState
  + drafState ArticleState
  + moderationState ArticleState
  + publishedState ArticleState
  - stateHistory

  + publish(user User)
  + review(user User)
  + retract(user User)
  + getState() ArticleState
  + setState(state ArticleState)
  + getHistoty() string[]
  - logStateChange(newState ArticleState)
}

class ArticleState {
  <<abstract>>
  - name string
  - article Article

  + getName() string
  + publish(user User)
  + review(user User)
  + retract(user User)
}

class DraftState {
  - name string

  + publish()
  + review(user User)
  + retract()
}

class ModerationState {
  - name string

  + publish(user User)
  + review()
  + retract(user User)
}

class PublishedState {
  - name string

  + publish()
  + review(user User)
  + retract(user User)
}

class User {
  + username string
  + role string
}

Article --> ArticleState
ArticleState <|-- DraftState
ArticleState <|-- ModerationState
ArticleState <|-- PublishedState
ArticleState o-- User
```

## Execute

```bash
$ npm run execute:solved editorial-workflow
```

## Tests

### Unit and integration tests

```bash
$ npm run test:unit:problem editorial-workflow
```

### Mutation test

```bash
$ npm run test:mutation:problem editorial-workflow
```
