declare type Optional<T> = T | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Struct = Record<string, any>;

declare type DeepPartial<T> = {
  [P in keyof T]?:
    // eslint-disable-next-line @typescript-eslint/ban-types
    T[P] extends Function
      ? T[P]
      : T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
          ? ReadonlyArray<DeepPartial<U>>
          : DeepPartial<T[P]>
};
