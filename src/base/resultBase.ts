import Reason from '~/reasons/reason';
import Success from '~/reasons/success';

export default class ResultBase {
	// #region Properties (1)

	private _reasons: Reason[] = [];

	// #endregion Properties (1)

	// #region Public Accessors (2)

	public get IsFailed(): boolean {
		return this.Errors.length > 0;
	}

	public get IsSuccess(): boolean {
		return !this.IsFailed;
	}

	public get Reasons(): Reason[] {
		return this._reasons;
	}

	public get Errors(): Error[] {
		// TODO This conversion from Reason to Error might need to be checked
		return this._reasons.filter(x => typeof x === typeof Error).map(x => (x as unknown) as Error);
	}

	public get Successes(): Success[] {
		// TODO This conversion from Reason to Error might need to be checked
		return this._reasons.filter(x => typeof x === typeof Success).map(x => (x as unknown) as Success);
	}

	// #endregion Public Accessors (2)
}


