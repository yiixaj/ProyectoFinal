# Proyecto Final
## 🧑‍💻 Miembros del grupo

- Andre Alessandro Romero Martínez  
- Katherine Leonor Moran Zavala  
- Luis Daniel Montaleza Ortiz  

---


## Descripción

Este proyecto es una aplicación web para gestionar items, con funcionalidades para crear, listar, editar y eliminar registros.  
Cuenta con un backend RESTful desarrollado en Spring Boot y un frontend en React usando Vite y TypeScript.

---

## Tecnologías usadas

- **Backend:** Java 17, Spring Boot, JPA/Hibernate, H2/MySQL (según configuración)  
- **Frontend:** React 18, Vite, TypeScript, Axios  
- **Testing:** JUnit 5, Mockito (backend)  
- **Documentación API:** Swagger/OpenAPI (opcional)

---

## Requisitos previos

- Java 17 o superior  
- Maven  
- Node.js y npm  
- (Opcional) Docker

---

## Configuración y ejecución

### Backend
el backend estará corriendo en http://localhost:8080

Frontend
Ir a la carpeta del frontend

Instalar dependencias:

```bash

npm install
Configurar la URL del backend en .env o archivo .env.local:
```

VITE_API_URL=http://localhost:8080
Ejecutar el frontend:

```bash
npm run dev
El frontend estará disponible en http://localhost:5173 (o el puerto que indique Vite)
```
1. Clonar el repositorio  
2. Configurar las variables de conexión a base de datos en `src/main/resources/application.properties`  
3. Ejecutar el backend con:

```bash
mvn spring-boot:run
