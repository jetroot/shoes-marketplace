# Shoes Marketplace

A shoes marketplace project built with ReactJS, GraphQL, SpringBoot and PostgreSQL and docker.

![Shoes Marketplace](/public/screenshots/app.png)


### 1. Running postgresql with docker
```bash
cd docker && docker compose -f postgresql.yaml up
```

### 2. Open `shoes springboot project (backend)` in Intellij Ide and Run it 

### 3. Test with graphiql
![graphiql](/public/screenshots/graphql.png)
```bash
query products {
  products{
    status,
    body {
      id
      title
      image
      description
      price
    }
  } 
}

query getProductById($id: ID!) {
  getProductById(id: $id) {
    status,
    body {
      id,
      title
    }
  }
}

mutation product($product:ProductInput) {
  createProduct(product: $product) {
    status
  }
}

------ Add this in variables section ------
{
  "product": {
    "title": "First title test",
    "image": "images/shoe.png",
    "description": "second description test",
    "price": 25.4
  },
  "id": "16c93d5b42d247afa02dc45013a2b8e1"
}
```


### 4. install frontend packages
```bash
cd frontend && npm install
```


### 5. Running the frontend
```bash
npm start
```

