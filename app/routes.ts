import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.tsx", [
    index("./routes/Home.tsx"),
    route("resume", "./routes/Resume.tsx"),
    route("reads", "./routes/Reads.tsx")
  ]),
] satisfies RouteConfig;
