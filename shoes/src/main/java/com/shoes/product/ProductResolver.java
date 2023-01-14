package com.shoes.product;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ProductResolver {
    private final ProductService productService;

    public ProductResolver(ProductService productService) {
        this.productService = productService;
    }

    @QueryMapping(name = "products")
    public ResponseEntity<List<Product>> getProducts() {
        return new ResponseEntity<>(
                productService.getAllProducts(),
                HttpStatus.OK
        );
    }

    @MutationMapping(name = "createProduct")
    public ResponseEntity<Integer> createProduct(@Argument("product") Product product) {
        boolean isSaved = productService.createProduct(product);

        if (!isSaved) {
            return new ResponseEntity<>(
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }

        return new ResponseEntity<>(
                HttpStatus.CREATED
        );
    }

    @QueryMapping(name = "getProductById")
    public ResponseEntity<Product> getProductById(@Argument("id") String id) {
        Product product = productService.getProductById(id);

        if (product != null) {
            return new ResponseEntity<>(
                    product,
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                product,
                HttpStatus.NOT_FOUND
        );
    }
}
