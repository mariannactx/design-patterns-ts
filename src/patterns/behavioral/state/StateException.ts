export default class StateException extends Error {
  constructor(reason: string) {
    super('Operation not supported. ' + reason);
  }
}
