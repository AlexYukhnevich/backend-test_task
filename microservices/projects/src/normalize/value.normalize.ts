export const normalizeValue = (value) => {
  if (typeof value === 'string') {
    if (!value) {
      return null;
    }
    const modifiedValue = Number(value);
    return modifiedValue ? modifiedValue : value;
  }
  return value;
}