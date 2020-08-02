import Reason from './reason';

export default class Error extends Reason {
  // #region Properties (1)

  private _errors: Error[] = [];

  // #endregion Properties (1)

  // #region Public Accessors (1)

  public get errors(): Error[] {
    return this._errors;
  }

  public get type(): string {
    return 'Error';
  }
  // #endregion Public Accessors (1)

  /**
   *
   */
  constructor(message: string, causedBy: Error | null = null) {
    super();
    this._message = message;
    if (causedBy) {
      this._errors.push(causedBy);
    }
  }

  public causedBy(error: Error): Error {
    this._errors.push(error);
    return this;
  }

  public causedByFromMessage(message: string): Error {
    this._errors.push(new Error(message));
    return this;
  }

  public withMessage(message: string): Error {
    this._message = message;
    return this;
  }

  public withMetadata(metadataName: string, metadataValue: object): Error {
    this._metadata.set(metadataName, metadataValue);
    return this;
  }

  public fromMetadata(metadata: Map<string, object>): Error {
    for (const [_key, _value] of this._metadata) {
      this._metadata.set(_key, _value);
    }
    return this;
  }
}
