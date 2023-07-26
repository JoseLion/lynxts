declare type OmitR<T, K extends keyof T> = Omit<T, K>;

declare type Optional<T> = T | undefined;
