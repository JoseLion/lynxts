import { SetStateAction } from "react";

/**
 * Type guard to discrimiate a React.js `SetStateAction<T>` type between its
 * function or value form.
 *
 * @param action a React.js set satte action
 * @returns true if the action is a function, false otherwise
 */
export function isFunctionAction<T>(action: SetStateAction<T>): action is (prev: T) => T {
  return typeof action === "function";
}

/**
 * Helper function for a no-operation action.
 */
export function noop(): void {
  return undefined;
}
