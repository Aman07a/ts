class ValueHolder<T> {
  value: T;
}

const numberHolder = new ValueHolder<number>();
numberHolder.value;

new ValueHolder<string>();
new ValueHolder<boolean>();
