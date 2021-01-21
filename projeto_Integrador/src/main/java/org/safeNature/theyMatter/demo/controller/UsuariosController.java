package org.safeNature.theyMatter.demo.controller;

import java.util.List;
import java.util.Optional;

import org.safeNature.theyMatter.demo.dto.userLogin;
import org.safeNature.theyMatter.demo.model.Usuarios;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;
import org.safeNature.theyMatter.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuariosController {// CRUD METHODS
									// ----------------------------------------------------------------\\

	@Autowired
	public UsuariosRepository usuariosRepository;

	@Autowired
	public UserService userService;

	// METODOS GET --------------------------------------------------------------\\

	@GetMapping("/todos")
	public ResponseEntity<List<Usuarios>> getAll() {
		return ResponseEntity.ok(usuariosRepository.findAll());
	}

	@GetMapping("/id/{id}")
	public ResponseEntity<Usuarios> getById(@PathVariable Long id) {
		return usuariosRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	// FIM DOS METODOS GET
	// --------------------------------------------------------\\

	//

	// METODO POST
	// ----------------------------------------------------------------\\

	@PostMapping("/logar")
    public ResponseEntity<userLogin> Autentication(@RequestBody Optional<userLogin> user) {
        return userService.login(user).map(resp -> ResponseEntity.ok(resp))
        .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuarios> Post(@RequestBody Usuarios usuario) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.userRegister(usuario));
    }
	// -----------------------------------------------------------------------------\\
	// METODO
	// PUT/UPDATE------------------------------------------------------------\\

	@PutMapping("update/{id}")
	public ResponseEntity<Usuarios> put2(@PathVariable Long id, @RequestBody Usuarios usuarios) {
		return usuariosRepository.findById(id)
		           .map(record -> {
		        	   if(usuarios.getNome() != null) {
		        		   record.setNome(usuarios.getNome());
		        	   }
		        	   if(usuarios.getEmail() != null) {
		        		   record.setEmail(usuarios.getEmail());
		        	   }
		        	   if(usuarios.getSenha() != null) {
		        		   record.setSenha(usuarios.getSenha());
		        	   }
		               Usuarios updated = usuariosRepository.save(record);
		               return ResponseEntity.ok().body(updated);
				   }).orElse(ResponseEntity.notFound().build());
				}
	// ------------------------------------------------------------------------------\\

	//

	// METODO DELETE
	// -----------------------------------------------------------------\\

	@DeleteMapping("/delete/{id}")
		public String deletar(@PathVariable Long id) {
			try {
				usuariosRepository.deleteById(id);
		            return "Sucesso";
		        } catch(Exception e) {
		            return "Erro: "+ e.getMessage();
		        }
	}
}
