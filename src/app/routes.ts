import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/new-letter", "routes/new-letter.tsx"),
  route("/letter/:id", "routes/letter.tsx"),
] satisfies RouteConfig;
