FROM node:alpine

ENV NODE_ENV production
LABEL org.opencontainers.image.title "myHolidayApp"
LABEL org.opencontainers.image.description "A self-hosted service page, with docker and service integrations."
LABEL org.opencontainers.image.url="https://joachimth.github.io/MyHolidayApp"
LABEL org.opencontainers.image.documentation='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.source='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.licenses='MIT'


WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . /app
RUN npm run build

ENV PORT 5000
EXPOSE 5000

RUN npm install serve -g
CMD ["serve", "-s", "dist/"]
