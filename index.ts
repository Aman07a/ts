class ValueHolder<T> {
  value: T;
}

const numberWrapper = (value: number): number[] => {
  return [value];
};

const booleanWrapper = (value: boolean): boolean[] => {
  return [value];
};

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

const value = valueWrapper<number>(10);
