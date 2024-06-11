export const sanitizeStringsForSearch = (value: string): string => {
  return value.toLowerCase().replaceAll(" ", "").replaceAll(".", "");
};
