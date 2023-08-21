# Redux Playground

![Core Tech: Redix](https://img.shields.io/badge/core_technology-redux-darkmagenta?logo=redux&link=https%3A%2F%2Freact.dev%2F)
![Powered By: React](https://img.shields.io/badge/powered_by-react-lightblue?logo=react&link=https%3A%2F%2Freact.dev%2F)
![Language: Typescript](https://img.shields.io/badge/language-typescript-blue?logo=typescript&link=https%3A%2F%2Fwww.typescriptlang.org%2F)
![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)

## 🎯 Purpose

This repository is **not** intended as a standalone working project;
instead, it serves as a showcase of knowledge pertaining to specific
technology(-ies). As a result, much of the standard documentation, 
has been omitted and the project itself serves no greater purpose.

## ✨ Features of the project

The project features a website with three pages each with different contents inside.
<br/>
The pages users and todos fetch the data from the "https://jsonplaceholder.typicode.com", a website
that provides free REST API in with different data. Both pages feature simple fetching and displaying
of the data via React-Redux, however todos page also features **pagination**.
<br/>
Third page, posts, utilizes the "real" server created by json-server to showcase usage of all standard
method of REST API (e.g. POST, PUT, DELETE) using **RTK Query**. (Due to this server dependency the
gh pages preview was shut down).

![sdasd](https://i.ibb.co/8XNkX2z/image.png)

## 🔨 Build process

- Install json-server using following command ```npm install -g json-server```
  - Run the server ```json-server --watch db.json --port 5000```
  - If you encounter execution policies error while running server in powershell on windows, type ```Set-ExcecutionPolicy -ExcecutionPolicy Unrestricted -Scope CurrentUser```
- Install all node dependencies via ```npm install```
- Run ```npm run build``` and either preview the result via ```npm run preview``` or ship it to the server.
  - ```npm run dev``` is sufficient for the test / preview purposes, however the performance might slightly differ
  from build version.

[//]: # "Set-ExcecutionPolicy -ExcecutionPolicy Unrestricted -Scope CurrentUser"