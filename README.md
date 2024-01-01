# Introduction

This project is about demonstrating Angular monorepo using NX which contains two Angular web apps used by internal staff and customers. 
The staff app and the customer app contain the product info UI which is used on the staff app - product management screen and the customer app - product detail pages.

This project is built up via Nx monorepo CLI via below steps:

Create workspace and staff app
```shell
npx create-nx-workspace
```

Create customer app
```shell
npx nx g @nx/angular:app customer-app --directory=apps/customer-app
```

Create product detail library
```shell
npx nx g @nx/angular:library product --directory=libs/product --standalone
```

## How to get started?
Start staff app
```shell
npm install
npx nx serve staff-ap
```
Start customer app
```shell
npm install
npx nx serve customer-ap
```

We can access product management screen via http://localhost:4200/product-mng and product detail screen via http://localhost:4200/product-detail

