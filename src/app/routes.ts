import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/root/index.ts", [
    index("routes/home.tsx"),
    route("/letters/new", "routes/new-letter.tsx"),
    route("/letters/:id", "routes/letter.tsx"),
  ]),
] satisfies RouteConfig;
