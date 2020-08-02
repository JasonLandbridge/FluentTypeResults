import ResultBase from '../base/resultBase';
import Result from '..';
import Reason from '../reasons/reason';
import Error from '../reasons/error';

export default class ResultBaseGeneric<TResult extends Result> extends ResultBase {
  public withReason(reason: Reason): TResult {
    this.reasons.push(reason);
    // TODO Check if the conversion is happening correctly
    return (this as unknown) as TResult;
  }

  public withReasons(reasons: Reason[]): TResult {
    reasons.forEach((reason) => {
      this.withReason(reason);
    });

    // TODO Check if the conversion is happening correctly
    return (this as unknown) as TResult;
  }

  public withError(error: Error): TResult {
    // TODO Check if the conversion is happening correctly
    return this.withReason((error as unknown) as Reason);
  }

  public withErrorFromMsg(errorMessage: string): TResult {
    return this.withError(new Error(errorMessage));
  }
}
