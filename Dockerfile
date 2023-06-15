### build ######
FROM node:14-alpine AS build
WORKDIR /app
ADD package*.json ./
RUN npm install -g ionic

#RUN npm install
#COPY . .
#RUN npm run build --configuration production


### run ########
#FROM nginx:1.17.1-alpine AS prod-stage
#COPY --from=build /app/dist/WritersLab /urs/share/nginx/html
#EXPOSE 80
#CMD ["nginx","-g","daemon off;"]


