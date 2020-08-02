import Reason from './reason';

export default class Error extends Reason {
	// #region Properties (1)

	private _reasons: Error[] = [];

	// #endregion Properties (1)

	// #region Public Accessors (1)

	public get Reasons(): Error[] {
		return this._reasons;
	}

	// #endregion Public Accessors (1)

	/**
	 *
	 */
	constructor(message: string = "", causedBy: Error | null = null) {
		super();
		this._message = message;
		if (causedBy) {
			this._reasons.push(causedBy);
		}
	}

	public CausedBy(error: Error): Error {
		this._reasons.push(error);
		return this;
	}

	public CausedByFromMessage(message: string): Error {
		this._reasons.push(new Error(message));
		return this;
	}

	// TODO Need an exception type
	// public CausedBy(exception: Exception): Error{
	// 	this._reasons.push(error);
	// 	return this;
	// }

	// TODO Need an exception type
	// public CausedBy(message: string, exception: Exception): Error{
	// 	this._reasons.push(error);
	// 	return this;
	// }

	public WithMessage(message: string): Error {
		this._message = message;
		return this;
	}

	public WithMetadata(metadataName: string, metadataValue: object): Error {
		this._metadata.set(metadataName, metadataValue);
		return this;
	}

	public FromMetadata(metadata: Map<string, object>): Error {
		for (const [_key, _value] of this._metadata) {
			this._metadata.set(_key, _value);
		}
		return this;
	}

		// TODO add GetReasonStringBuilder()

}