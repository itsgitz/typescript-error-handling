//
// TypeScript error handling
// Source: https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991
class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: T;
    message: string;
    cause?: any;
  }) {
    super();

    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

type ErrorName =
  | "GET_PROJECT_ERROR"
  | "CREATE_PROJECT_ERROR"
  | "PROJECT_LIMIT_REACHED";

class TeamError extends ErrorBase<ErrorName> {}

function createProject() {
  throw new TeamError({
    name: "GET_PROJECT_ERROR",
    message: "Unable to get project.",
  });
}

try {
  createProject();
} catch (e) {
  if (e instanceof TeamError) {
    if (e.name === "GET_PROJECT_ERROR") {
      console.log(e.message);
    }
  }
}
