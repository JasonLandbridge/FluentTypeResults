
# FluentTypeResults

FluentTypeResults is a lightweight Result Pattern Typescript library built to solve a common problem - returning an object to either indicate success or failure of an operation instead of using exceptions.

FluentTypeResults is a Typescript version of [FluentResults](https://github.com/altmann/FluentResults) and uses the same syntax and works great together.

## Key Features

- Storing multiple errors in one Result object
- Storing powerful Error and Success objects and not only error string messages
- Designing Errors/Success in an object-oriented way
- Storing the root cause chain of errors in a hierarchical way

## Installation

```bash
npm i fluent-type-results
```

## Example

```javascript
import Axios, { AxiosResponse } from 'axios';
import Result from 'fluent-type-results';
import IAccount from '@dto/IAccount';

export async function getUserAccount(id: number): Promise<Result<IAccount>> {
 await Axios.get<Result<IPlexAccount>>(`/account/${id}`).then(({ data }) => {
  if (data.isFailed) {
   console.log(data.toErrorString);
  }

  return data.value;
 });
}
```

## Articles

- [Clean Up Your Client to Business Logic Relationship With a Result Pattern (C#)](https://alexdunn.org/2019/02/25/clean-up-your-client-to-business-logic-relationship-with-a-result-pattern-c/)
