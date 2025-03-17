import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/letters/new", "routes/new-letter.tsx"),
  route("/letters/:id", "routes/letter.tsx"),
] satisfies RouteConfig;
