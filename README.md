<h1 align="center">fibbo-teste</h1>

## Descrição
**fibbo-teste** É um projeto para solução do desafio técnico da empresa Fibbo.


## Principais Tecnologias:
[Java](https://www.oracle.com/java/technologies/downloads/?er=221886)  
[SpringBoot](https://spring.io/projects/spring-boot)  
[Maven](https://maven.apache.org/)  
[Docker](https://www.docker.com/)  
[Docker Compose](https://docs.docker.com/compose/)  
[Lombok](https://projectlombok.org/)  
[Flyway](https://flywaydb.org/)  
[SpringdocOpenAPI](https://springdoc.org/)  
[JUnit](https://junit.org/junit5/)  
[Mockito](https://site.mockito.org/)  
[PostgreSQL](https://www.postgresql.org/)  
[React](https://react.dev/)  
[TailwindCss](https://tailwindcss.com/)  
[NextJs](https://nextjs.org/)  

## Padrões e design aplicados
[SOLID](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)  
[Repository](https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30)        
[Clean Architecture](https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6)  
[DDD](https://fullcycle.com.br/domain-driven-design/)

# Rodando a aplicação localmente

## Clonando a aplicação

``` 
https://github.com/Flaviojcf/fibbo-teste.git
```

Entre na pasta do projeto

``` 
cd teste-fibbo
```

## Rodando o backend com Docker

Entre na pasta do serviço de backend

``` 
cd backend
```
Suba o container  

``` 
docker compose up -d --build
```
Acesse o swagger
``` 
http://localhost:8081/swagger-ui/index.html
```

## Rodando o frontend

Entre na pasta do serviço de frontend
``` 
cd frontend
```

Crie um arquivo .env copiando o que está dentro do .env.example
``` 
DATABASE_URL="http://localhost:8081"
``` 

Instale as dependências
``` 
npm i
```
Inicie a aplicação
``` 
npm run dev
```
Acesse a aplicação web
``` 
http://localhost:8081/
```

🛠️ Created by [Flaviojcf](https://github.com/Flaviojcf)
