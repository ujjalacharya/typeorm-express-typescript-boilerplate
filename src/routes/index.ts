import { HTTP_METHODS } from "@utils/constants";
import { TestRoute } from "./TestRoute";

/**
 * All application routes.
 */
export const AppRoutes = [
  ...TestRoute,
  {
    path: "*",
    method: HTTP_METHODS.GET,
    action: (req, res) => {
      // return res.status(404).json({error: true, message: "Route not found"})
      throw new Error("Route not found");
    },
  },
];
