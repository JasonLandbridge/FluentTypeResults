import ResultBase from '@base/resultBase';
import Reason from '@reasons/reason';
import Result from '@results/result';

export default class ResultBaseGeneric<TResult extends Result> extends ResultBase {
  public WithReason(reason: Reason): TResult {
    this.Reasons.push(reason);
    // TODO Check if the conversion is happening correctly
    return (this as unknown) as TResult;
  }

  public WithReasons(reasons: Reason[]): TResult {
    reasons.forEach((reason) => {
      this.WithReason(reason);
    });

    // TODO Check if the conversion is happening correctly
    return (this as unknown) as TResult;
  }

  public WithError(error: Error): TResult {
    // TODO Check if the conversion is happening correctly
    return this.WithReason((error as unknown) as Reason);
  }

  public WithErrorFromMsg(errorMessage: string): TResult {
    return this.WithError(new Error(errorMessage));
  }
}
