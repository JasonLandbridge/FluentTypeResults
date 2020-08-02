import ResultBaseGeneric from '@base/resultBaseTValue.ts';

export default class Result<TValue> extends ResultBaseGeneric<Result<TValue>> {
  // #region Properties (1)

  private _value: TValue | null = null;

  // #endregion Properties (1)

  // #region Constructors (1)

  /**
   *
   */
  protected constructor() {
    super();
  }

  // #endregion Constructors (1)

  // #region Public Accessors (3)

  public get Value(): TValue | null {
    if (this.IsFailed) {
      // TODO add logging to signal that the this Result has failed and thus the value is null
    }
    return this._value;
  }

  public set Value(v: TValue | null) {
    if (this.IsFailed) {
      // TODO add logging to signal that the this Result has failed and thus the value is not set
      return;
    }
    this._value = v;
  }

  public get ValueOrDefault(): TValue | null {
    return this._value;
  }

  // #endregion Public Accessors (3)

  // #region Public Methods (1)

  ToResult<TNewValue>(): Result<TNewValue> {
    return new Result<TNewValue>().WithReasons(this.Reasons);
  }

  WithValue(value: TValue): Result<TValue> {
    this.Value = value;
    return this;
  }

  // TODO add "public Result<TNewValue> ToResult<TNewValue>(Func<TValue, TNewValue> valueConverter = null)"

  // #endregion Public Methods (1)

  public static Ok<TValue>(): Result<TValue> {
    return new Result<TValue>();
  }

  public static Fail<TValue>(error: Error): Result<TValue> {
    return new Result<TValue>().WithError(error);
  }

  public static FailFromMsg<TValue>(errorMessage: string): Result<TValue> {
    return new Result<TValue>().WithError(new Error(errorMessage));
  }

  public Merge(result: Result<TValue>): Result<TValue> {
    this.WithReasons(result.Reasons);
    return this;
  }

  public MergeWithValue<TNewValue>(result: Result<TValue>): Result<TValue> {
    this.WithReasons(result.Reasons);
    if (result.Value) {
      // TODO Check if this type is set correctly
      this.Value = result.Value;
    }
    // TODO Check if the conversion is happening correctly
    return (this as unknown) as Result<TValue>;
  }
}
