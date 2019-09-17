FROM openjdk:8-alpine

COPY target/uberjar/server.jar /server/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/server/app.jar"]
