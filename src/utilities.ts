import { Response, Responses } from 'swagger-jsdoc';
import { Path } from './routes/types';

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
      return buildResponse(code, description, schema || 'ApiErrorResponse');
    } else if (code >= 400 && code < 500) {
      return buildResponse(code, description, 'ApiErrorResponse');
    }
    return buildResponse(999, '', '');
  });
  responses.push(buildResponse(404, 'Not found', 'ApiErrorResponse'));
  responses.push(buildResponse(500, 'Server error', 'ApiErrorResponse'));
  return responses.reduce((curr, next) => {
    const { code, ...rest } = next;
    curr[code] = rest;
    return curr;
  }, {} as Responses);
};

const reducePaths = (paths: Array<Path>) =>
  paths.reduce(
    (curr, [pathName, pathItem]) => ({ ...curr, [pathName]: pathItem }),
    {},
  );

export { buildResponses, reducePaths };
