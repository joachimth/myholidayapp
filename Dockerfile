FROM node:alpine

ENV NODE_ENV production
LABEL org.opencontainers.image.title "HolidayApp"
LABEL org.opencontainers.image.description "A self-hosted service landing page, with docker and service integrations."
LABEL org.opencontainers.image.url="https://github.com/gethomepage/homepage"
LABEL org.opencontainers.image.documentation='https://github.com/gethomepage/homepage/wiki'
LABEL org.opencontainers.image.source='https://github.com/gethomepage/homepage'
LABEL org.opencontainers.image.licenses='Apache-2.0'


WORKDIR /usr/src/app

COPY . .

RUN npm install -qy

RUN npm run build

ENV PORT 3232
EXPOSE 3232

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "start"]