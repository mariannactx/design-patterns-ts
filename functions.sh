#!/bin/bash
ignoreTypings="--collectCoverageFrom=!src/**/*.d.ts\""

pattern() {
  echo "src/patterns/$1/**/*.ts"
}
problem() {
  echo "src/problems/$1/**/*.ts"
}

test_pattern() {
  jest tests/unit/patterns/"$1" tests/integration/patterns/"$1" --coverage --collectCoverageFrom=$(pattern $1) $ignoreTypings
}

test_problem() {
  jest tests/unit/problems/"$1" tests/integration/problems/"$1" --coverage --collectCoverageFrom=$(problem $1) $ignoreTypings
}

test_mutation_pattern() {
  npx stryker run -m $(pattern $1)
}

test_mutation_problem() {
  npx stryker run -m "$(problem $1)"
}

execute_problem() {
  npm run build && node .build/problems/$1/code-with-problem
}

execute_solved() {
  npm run build && node .build/problems/$1/solved
}

"$@"