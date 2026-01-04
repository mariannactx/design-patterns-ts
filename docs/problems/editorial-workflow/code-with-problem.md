# Code w/ problem: Editorial workflow

An application designed to govern the editorial workflow of digital articles. It strictly enforces a multi-tiered state model — Draft, Moderation, and Published — to control content progression. Core system actions, including Publish, Review, and Retract, are dependent on the article's current state and require specific user permissions. Only Administrators possess the full authority to transition content into the Published state and remove live articles from the platform, while Editors are authorized to manage the review process and transition articles back to Draft. The system ensures a secure and auditable pipeline for all editorial changes.

## Class diagram

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
  - stateHistory string[]
  + getState()
  + getHistory()
  - logStateChange(newState: ArticleState)
  + publish(user: User)
  + review(user: User)
  + retract(user: User)
}

interface User {
  + id number
  + username string
  + role string
}

Article --> User

```

## Execute

```bash
$ npm run execute:problem editorial-workflow
```

## Tests

### Unit and integration tests

```bash
$ npm run test:problem editorial-workflow
```

### Mutation test

```bash
$ npm run test:mutation:problem editorial-workflow
```
