
export class ValueSet<T> extends Set<T> {

  constructor(...args: T[]) {
    super(args);
  }

  add(item: T) {
    if (this._hasByValue(item)) {
      return this;
    }

    super.add(item);
    return this;
  }

  private _hasByValue(newItem: T) {
    for (const item of this) {
      if (this._isEqual(item, newItem)) {
        return true;
      }
    }
    return false;
  }

  private _isEqual(obj1: any, obj2: any) {

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // If the objects have different numbers of keys, they can't be equal.
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Check if the objects have the same keys and values for those keys.
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    // If all the keys and values are the same, the objects are equal.
    return true;
  }

  // adding a missing map() method to JS Set
  map<U>(callback: (value: T, index?: number, arr?: T[]) => U) {
    return new ValueSet<U>(...[...this].map(callback));
  }

  // for convenience
  mapToArray<U>(callback: (value: T, index?: number, arr?: T[]) => U) {
    return [...this].map(callback);
  }
};

export type ValidationResult = {
  valid: Boolean;
  error?: Error;
};