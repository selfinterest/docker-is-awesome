FROM    ubuntu:trusty

MAINTAINER Terrence Watson

# See: https://stackoverflow.com/questions/25899912/install-nvm-in-docker
#RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get -y -q install curl

ENV NVM_DIR /usr/local/.nvm
ENV NODE_VERSION v7.10.0

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

#    && source $NVM_DIR/nvm.sh \
#    && nvm install $NODE_VERSION \
#    && nvm alias default $NODE_VERSION \
#    && nvm use default


# Let's not always use nodemon, but for now it is okay
RUN npm install -g nodemon

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE 8080

CMD ["nodemon", "/src/index.js"]

