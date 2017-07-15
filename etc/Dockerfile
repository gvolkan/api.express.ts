FROM kuwas/node:latest
MAINTAINER kuwas/dockerfiles

# setup #

COPY ./ /app/
RUN rm -rf /app/node_modules
RUN ls -la /app/*
RUN npm install -g yarn
RUN yarn install

# cmd #

EXPOSE 443 80
CMD [ "/usr/bin/yarn" , "start" ]
