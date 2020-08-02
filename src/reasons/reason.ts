export default class Reason {
  // #region Properties (2)

  protected _message: string = '';
  protected _metadata: Map<string, object> = new Map<string, object>();

  // #endregion Properties (2)

  // #region Public Accessors (3)

  public get message(): string {
    return this._message;
  }

  public get metadata(): Map<string, object> {
    return this._metadata;
  }

  public set metadata(v: Map<string, object>) {
    this._metadata = v;
  }

  // #endregion Public Accessors (3)

  public hasMetaDataKey(key: string): boolean {
    if (!key) {
      return false;
    }
    return this._metadata.has(key);
  }

  public hasMetaData(key: string, predicate: (obj: object) => boolean): boolean {
    if (!key) {
      return false;
    }

    if (predicate == null) {
      return false;
    }

    for (const [_key, _value] of this._metadata) {
      if (predicate(_value)) {
        return true;
      }
    }

    return false;
  }

  // TODO add GetReasonStringBuilder()
}
