FROM node:latest AS builder
RUN ["mkdir", "/tmp/builder"]
WORKDIR /tmp/builder
COPY package*.json ./
RUN ["npm", "install"]
COPY src/ ./src/
RUN ["npm", "run", "build"]

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
RUN ["mkdir", "/usr/share/nginx/app"]
COPY --from=builder /tmp/builder/dist/ /usr/share/nginx/app/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]