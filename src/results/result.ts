import ResultBaseGeneric from '~/base/resultBaseTValue.ts';

export default class Result extends ResultBaseGeneric<Result> {
	/**
	 *
	 */
	protected constructor() {
		super();
	}

	ToResult(): Result {
		return new Result().WithReasons(this.Reasons);
	}

	public static Ok(): Result {
		return new Result();
	}

	public static Fail(error: Error): Result {
		return new Result().WithError(error);
	}

	public static FailFromMsg(errorMessage: string): Result {
		return new Result().WithError(new Error(errorMessage));
	}

	public Merge(result: Result): Result {
		this.WithReasons(result.Reasons);
		return this;
	}
}