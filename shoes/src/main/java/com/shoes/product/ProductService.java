package com.shoes.product;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public boolean createProduct(Product product) {
        try {
            productRepository.save(product);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

    public Product getProductById(String id) {
        try {
            Optional<Product> product = productRepository.findById(id);
            return product.get();
        }catch (Exception err) {
            return null;
        }

    }
}
