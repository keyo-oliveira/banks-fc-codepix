FROM node:20-slim
#debian

RUN apt update -y && \ 
    apt install procps -y && \
    npm install -g @nestjs/cli@10.0.0 -y

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ] # ler o dispositivo nulo do linux , -f ler indefinitamente
