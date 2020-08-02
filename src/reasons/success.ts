import Reason from './reason';

export default class Success extends Reason {
  // #region Constructors (1)

  constructor(message: string = '') {
    super();
    this._message = message;
  }

  // #endregion Constructors (1)

  // #region Public Methods (2)

  public fromMetadata(metadata: Map<string, object>): Success {
    for (const [_key, _value] of this._metadata) {
      this._metadata.set(_key, _value);
    }
    return this;
  }

  public withMetadata(metadataName: string, metadataValue: object): Success {
    this._metadata.set(metadataName, metadataValue);
    return this;
  }

  // #endregion Public Methods (2)
}
