
export class ValueSet<T> extends Set<T> {

  constructor(...args: T[]) {
    super(args);
  }

  // 3 for-loops and 3 ifs is pretty bad, but these should be small objects
  add(item: T): this {

    // make Set add() method use value comparison for objects
    if (item === Object(item)) {

      for (const setItem of this) {

        let allValuesIdentical = true;

        for (const key in setItem) {
          for (const key2 in item) {
            if (key === key2) {
              if ((setItem as any)[key] !== (item as any)[key2]) {
                allValuesIdentical = false;
                break;
              }
            }
          }
        }
        // i.e., do not add the value-identical item
        if (allValuesIdentical) return this;
      }
    }
    super.add(item); // add the non-value-identical item
    return this;
  }

  // adding a missing map() method to JS Set
  map(callback: (value: T, index?: number, arr?: T[]) => unknown) {
    return new ValueSet(...[...this].map(callback));
  }

  // for convenience
  mapToArray(callback: (value: T, index?: number, arr?: T[]) => unknown) {
    return [...this].map(callback);
  }
};