# Stage 1: Build the React app
FROM node:20.17.0-alpine AS build

# ARGs
ARG VITE_OPEN_AI_KEY=${VITE_OPEN_AI_KEY}

# ENVs
ENV VITE_OPEN_AI_KEY=${VITE_OPEN_AI_KEY}

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . ./
RUN pnpm build

# Stage 2: Serve the React app with Nginx
FROM nginx:1.25-alpine
COPY --from=build /app/build/client /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]