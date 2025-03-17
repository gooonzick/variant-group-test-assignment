import { index, route,type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/new-letter", "routes/new-letter.tsx"),
] satisfies RouteConfig;
