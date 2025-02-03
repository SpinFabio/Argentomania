export function classNames(...strings: string[]) {
    return strings.reduce((prev, curr) => {
    return prev.concat(" " + curr);
  }, "");
}
