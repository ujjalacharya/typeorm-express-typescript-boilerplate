import { getTestAction, getTestBySlug, postTestAction } from "@controllers/TestAction";
import { HTTP_METHODS } from "@utils/constants";
import { getUserByParams, isNormalUser } from "src/middleware/auth/user";

const rootName = "/tests";

export const TestRoute = [
  {
    path: `${rootName}`,
    method: HTTP_METHODS.GET,
    middleware: [isNormalUser],
    action: getTestAction,
  },
  {
    path: `${rootName}`,
    method: HTTP_METHODS.POST,
    action: postTestAction,
  },
  {
    path: `${rootName}/:slug`,
    method: HTTP_METHODS.GET,
    middleware: [getUserByParams],
    action: getTestBySlug
  },
];
