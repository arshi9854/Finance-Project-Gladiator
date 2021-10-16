package com.lti.finance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.finance.beans.Product;
import com.lti.finance.services.ProductServiceImpl;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("product")
public class ProductController {
	
	@Autowired
	ProductServiceImpl productService;
	
	@GetMapping("/")
	public List<Product> getProduct(){
		return productService.getProducts();
	}
	
	@PostMapping("/add")
	public int addProduct(@RequestBody Product product) {
		return productService.addProduct(product);
	}
	
	@DeleteMapping("/delete/{product_id}")
	public void delProduct(@PathVariable("product_id") int productId) {
		productService.delProduct(productId);
		System.out.println("deleted");
		
	}
	
	@GetMapping("/search/{product_id}")
	public void searchProduct(@PathVariable("product_id") int productId ) {
		productService.searchProduct(productId);
	}
	

}
