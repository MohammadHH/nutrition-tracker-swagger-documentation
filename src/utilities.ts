import { Response, Responses } from 'swagger-jsdoc';

const buildResponse = (
  code: number,
  description: string,
  schema: string,
): Response => {
  return {
    code,
    description,
    content: {
      'application/json': {
        schema: { $ref: `#/components/schemas/${schema}` },
      },
    },
  };
};

const buildResponses = (
  arr: Array<[number, string, string] | [number, string]> = [],
): Responses => {
  const responses = arr.map(([code, description, schema]) => {
    if (code >= 200 && code < 400) {
      return buildResponse(code, description, schema || '');
    } else if (code >= 400 && code < 500) {
      return buildResponse(code, description, 'ApiErrorResponse');
    }
    return buildResponse(999, '', '');
  });
  responses.push(buildResponse(500, 'Server error', 'ApiErrorResponse'));
  return responses.reduce((curr, next) => {
    const { code, ...rest } = next;
    curr[code] = rest;
    return curr;
  }, {} as Responses);
};

export { buildResponses };
