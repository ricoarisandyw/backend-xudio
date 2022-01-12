export function success(values: any) {
  return JSON.stringify({
    message: 'Success',
    values,
  });
}
