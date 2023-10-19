export const ApiPlotRecord = {
  full: 'full',
  short: 'short',
} as const;

type ApiPlotType = keyof typeof ApiPlotRecord;

type QueryPayloadShape = {
  t?: string;
  plot?: ApiPlotType;
  i?: string;
};

export type QueryPayload = {
  apikey?: string;
} & QueryPayloadShape;

/**
 * Simple Util function to builder url with query parameters
 * ```js
 * urlBuilder('www.baseurl.com/',{
 * keyword: 'asdf
 * testKey: triple
 * })
 * // returns: www.baseurl.com/?keyword=asdf&testKey=triple
 * ```
 * @param baseUrl
 * @param query
 * @returns
 */
export const urlBuilder = (baseUrl: string, query: QueryPayload) => {
  const res = [];
  for (const [key, value] of Object.entries(query)) {
    res.push(`${key}=${value}`);
  }
  const queryParams = res.join('&');
  return `${baseUrl}?${queryParams}`;
};

export const excludeNA = (value: string) => (value === 'N/A' ? null : value);

export const splitAtComma = (value: string) => {
  const splittedString = value.split(',');
  return splittedString.map((item) => item.trim());
};
