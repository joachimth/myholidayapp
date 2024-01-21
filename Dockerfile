FROM node:alpine

ENV NODE_ENV production
LABEL org.opencontainers.image.title "myHolidayApp"
LABEL org.opencontainers.image.description "A self-hosted service page, with docker and service integrations."
LABEL org.opencontainers.image.url="https://joachimth.github.io/MyHolidayApp"
LABEL org.opencontainers.image.documentation='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.source='https://joachimth.github.io/MyHolidayApp'
LABEL org.opencontainers.image.licenses='MIT'


WORKDIR /app



# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install

# add app
COPY . ./

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
    