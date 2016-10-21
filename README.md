# Angular 2 + Spring
This project was generated with [angular-cli](https://github.com/angular/angular-cli)

## Development server
Run `npm start` (inside the static folder) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `npm run bundle` to build the project. The build artefacts will be stored in the `dist/` directory.

## Maven Config
You must have sure that the node/npm version inside your `pom.xml` matches with your system node/npm 

```xml
<configuration>
    <nodeVersion>v4.6.0</nodeVersion>
    <npmVersion>3.10.8</npmVersion>
</configuration>
```

## Set up user
Create a new user admin/admin

```sql 
INSERT INTO app_user(id, username, name ,password, active) VALUES (1, 'admin', 'Administrator' ,'$2a$10$wfUc57Xbt8cfI7j04nu9HuHXViVBA5BkSO7Xjlq/.5f4Y8B0AMIUC', true);
INSERT INTO role(id, code, name) VALUES (1, 'ADMIN','Administrator');
INSERT INTO app_user_roles (app_user_id, roles_id) VALUES (1, 1); 
```

>Tools and technologies used :
  - Eclipse Project with Maven.
  - Java 8
  - Spring Boot + Spring Data JPA + Spring Security
  - Angular 2
  - Angular CLI
  - TypeScript
  - GulpJS
  - Sass / SCSS
  - Bootstrap