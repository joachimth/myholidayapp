FROM node:alpine

ENV NODE_ENV production
LABEL org.opencontainers.image.title "myHolidayApp"
LABEL org.opencontainers.image.description "A self-hosted service page, with docker and service integrations."
LABEL org.opencontainers.image.url="https://joachimth.github.io/MyHolidayApp"
LABEL org.opencontainers.image.documentation='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.source='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.licenses='MIT'


WORKDIR /usr/src/app

COPY . .

RUN npm install -qy

RUN npm run build

ENV PORT 3232
EXPOSE 3232

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "start"]