## Objectives
### Goals
0. Identify the challenges of using callback-style asynchronous functions
1. Define what a promise is
2. Identify how promises solve challenges associated with callback-style asynchrounous functions
3. Write asynchronous code that utilizes promise-returning functions (instead of callbacks) by
   1. Translating callback-style sequences to equivalent promise-style sequences
   2. Utilizing promise parallelization API to improve performance of asynchronous functions[^0]

### Non-Goals
 - Convert a callback-style asynchronous function to a promise returning asynchronous function
 - Explore `async`/`await` syntax


## Activities
0. As a group, convert warmup from asynchronous callback style promise-style _(Goals 1, 2, 3.1)_
1. [Individually, implement new promise-style request handler](./activity1.md) _(Goal 3.1)_
2. As a group, improve performance of new promise-style request handler _(Goal 3.2)_
3. [Individually, implement performant promise-style request handler](./activity3.md) _(Goal 3.2)_[^0]: Time permitting


## External Resources
- [`Promise` description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) (Goal 0)
- [`Promise` instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#instance_methods) (Goal 3.1)
- [`Promise` static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods) (Goal 3.2)

[^0]: Time permitting