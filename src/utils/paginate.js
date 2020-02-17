// human-readable page numbers usually start with 1, so we reduce 1 in the first argument
export const paginate = (data, limit = 10, index = 1) =>
  data.slice((index - 1) * limit, index * limit);
