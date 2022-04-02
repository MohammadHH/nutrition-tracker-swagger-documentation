const buildResponse = (code, description, schema) => {
  return {
    code,
    description,
    content: {
      "application/json": {
        schema: { $ref: `#/components/schemas/${schema}` },
      },
    },
  };
};

const buildResponses = (arr:Array<any> = []) => {
  const responses = arr.map(([code, description, schema]) => {
    if (code >= 200 && code < 400) {
      return buildResponse(code, description, schema);
    } else if (code >= 400 && code < 500) {
      return buildResponse(code, description, "ApiErrorResponse");
    }
    return buildResponse(999,'','')
  });
  responses.push(buildResponse(500, "Server error", "ApiErrorResponse"));
  return responses.reduce((curr, next) => {
    const { code, ...rest } = next;
    curr[code] = rest;
    return curr;
  }, {});
};

export  {
  buildResponses,
};
