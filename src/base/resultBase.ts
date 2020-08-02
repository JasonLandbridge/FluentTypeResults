import Reason from '../reasons/reason';
import Success from '../reasons/success';

export default class ResultBase {
  // #region Properties (1)

  private _reasons: Reason[] = [];

  // #endregion Properties (1)

  // #region Public Accessors (2)

  public get isFailed(): boolean {
    return this.errors.length > 0;
  }

  public get isSuccess(): boolean {
    return !this.isFailed;
  }

  public get reasons(): Reason[] {
    return this._reasons;
  }

  public get errors(): Error[] {
    // TODO This conversion from Reason to Error might need to be checked
    return this._reasons.filter((x) => x.type === 'Error').map((x) => (x as unknown) as Error);
  }

  public get successes(): Success[] {
    // TODO This conversion from Reason to Error might need to be checked
    return this._reasons.filter((x) => x.type === 'Success').map((x) => (x as unknown) as Success);
  }

  // #endregion Public Accessors (2)
}
