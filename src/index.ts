import ResultBaseGeneric from './base/resultBaseTValue';
import Error from './reasons/error';

// tslint:disable-next-line: max-classes-per-file
export default class Result<TValue = any> extends ResultBaseGeneric<Result<TValue>> {
	// #region Properties (1)

	private _value: TValue | null = null;

	// #endregion Properties (1)

	// #region Constructors (1)

	protected constructor() {
		super();
	}

	// #endregion Constructors (1)

	// #region Public Accessors (3)

	public get value(): TValue | null {
		if (this.isFailed) {
			// TODO add logging to signal that the this Result has failed and thus the value is null
		}
		return this._value;
	}

	public set value(v: TValue | null) {
		if (this.isFailed) {
			// TODO add logging to signal that the this Result has failed and thus the value is not set
			return;
		}
		this._value = v;
	}

	public get valueOrDefault(): TValue | null {
		return this._value;
	}

	// #endregion Public Accessors (3)

	// #region Public Static Methods (3)

	public static Fail<TValue = any>(error: Error): Result<TValue> {
		return new Result<TValue>().withError(error);
	}

	public static FailFromMsg<TValue = any>(errorMessage: string): Result<TValue> {
		return new Result<TValue>().withError(new Error(errorMessage));
	}

	public static Ok<TValue = any>(value: TValue): Result<TValue> {
		const result = new Result<TValue>();
		result.value = value;
		return result;
	}

	// #endregion Public Static Methods (3)

	// #region Public Methods (4)

	public merge(result: Result<TValue>): Result<TValue> {
		this.withReasons(result.reasons);
		return this;
	}

	public mergeWithValue<TNewValue>(result: Result<TValue>): Result<TValue> {
		this.withReasons(result.reasons);
		if (result.value) {
			// TODO Check if this type is set correctly
			this.value = result.value;
		}
		// TODO Check if the conversion is happening correctly
		return (this as unknown) as Result<TValue>;
	}

	public toResult<TNewValue = any>(): Result<TNewValue> {
		return new Result<TNewValue>().withReasons(this.reasons);
	}

	public withValue(value: TValue): Result<TValue> {
		this.value = value;
		return this;
	}

	public toErrorString(): string {
		let errorString = 'Error: ';
		if (this.errors.length > 0) {
			this.errors.forEach(x => {
				errorString += `${x.message}; `
			})
		} else {
			errorString += 'No errors found';
		}
		return errorString;
	}
	// #endregion Public Methods (4)
}
