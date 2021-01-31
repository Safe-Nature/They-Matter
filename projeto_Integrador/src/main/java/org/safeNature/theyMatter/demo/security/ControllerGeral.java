package org.safeNature.theyMatter.demo.security;

import org.safeNature.theyMatter.demo.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller

public class ControllerGeral {
	
	@Autowired
	private ProdutosRepository repository;
	//localhost:8080 <- direciona p a index
		
	}