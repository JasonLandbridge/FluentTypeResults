# FluentTypeResults

FluentTypeResults is a lightweight Result Pattern Typescript library built to solve a common problem - returning an object to either indicate success or failure of an operation instead of using exceptions.

FluentTypeResults is the Typescript version of [FluentResults](https://github.com/altmann/FluentResults) and uses the same syntax and works great together!

**Feedback and pull requests are greatly appreciated!**

## Key Features

* Fully works with the Result class from [FluentResults](https://github.com/altmann/FluentResults)
* Storing multiple errors in one Result object
* Designing Errors/Success in an object-oriented way
* Storing the root cause chain of errors in a hierarchical way

## Installation

``` bash
npm i fluent-type-results
```

## Example

*It is assumed that the web api always returns a `Result<Account>` response.*

``` javascript
import Axios from 'axios';
import Result from 'fluent-type-results';
import IAccount from './dto/IAccount';

export async function getUserAccount(id: number): Promise<IAccount | null> {
    const { data } = await Axios.get<Result<IAccount>>(`/account/${id}`);

    if (data.isFailed) {
        console.log(data.toErrorString);
    }

    // value is always null if the result has failed and will otherwise contain the value
    return data.value;
}
```

## Important notes

* Compared to FluentResults, a Result.Ok() function always requires a valid object to be passed with it.

## Articles

* [Clean Up Your Client to Business Logic Relationship With a Result Pattern (C#)](https://alexdunn.org/2019/02/25/clean-up-your-client-to-business-logic-relationship-with-a-result-pattern-c/)

## Credits

* [Altman](https://github.com/altmann) - For his awesome work on [FluentResults](https://github.com/altmann/FluentResults)
