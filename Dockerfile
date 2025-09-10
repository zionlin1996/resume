FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
ENV CI=true
RUN npm run build

FROM socialengine/nginx-spa:latest

COPY --from=builder /app/build /app
EXPOSE 80