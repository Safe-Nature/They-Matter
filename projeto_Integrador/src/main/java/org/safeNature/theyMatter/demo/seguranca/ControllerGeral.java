package org.safeNature.theyMatter.demo.seguranca;


import org.safeNature.theyMatter.demo.model.UsuariosTable;
import org.safeNature.theyMatter.demo.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller

public class ControllerGeral {
	
	@Autowired
	private ProdutosRepository repository;
	//localhost:8080 <- direciona p a index
		@GetMapping(value= "/")
		public String login() {
			return "index";
		}	
		@GetMapping(value="/cadastrarUsuario")
		public String form(){
			return "formUsuario";
		}	
		
		@PostMapping(value="/cadastrarUsuario")
		public String form(UsuariosTable usuario){			
			repository.save(usuario);
			return "redirect:/cadastrarUsuario";
		}

	}



