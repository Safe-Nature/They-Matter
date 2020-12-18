package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.UsuariosTable;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;
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
public class UsuariosController {//CRUD METHODS ----------------------------------------------------------------\\
	
	@Autowired
	public UsuariosRepository usuariosRepository;
	
	//METODOS GET --------------------------------------------------------------\\
	
	@GetMapping("/todos")
	public ResponseEntity<List<UsuariosTable>>getAll(){
		return ResponseEntity.ok(usuariosRepository.findAll());
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<UsuariosTable> getById(@PathVariable Long id){
		return usuariosRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	// FIM DOS METODOS GET
		// --------------------------------------------------------\\

		//

	// METODO POST
	// ----------------------------------------------------------------\\

	@PostMapping("/post")
		public ResponseEntity<UsuariosTable> post(@RequestBody UsuariosTable usuarios) {
			return ResponseEntity.status(HttpStatus.CREATED).body(usuariosRepository.save(usuarios));
	}
	// -----------------------------------------------------------------------------\\

	//

	// METODO
	// PUT/UPDATE------------------------------------------------------------\\

	@PutMapping("put/{id}")
		public UsuariosTable put(@PathVariable Long id, @RequestBody UsuariosTable usuarios) {
			usuarios.setId(id);
			usuariosRepository.save(usuarios);
			return usuarios;
	}
	@PutMapping("put2/{id}")
	public ResponseEntity<UsuariosTable> put2(@PathVariable Long id, @RequestBody UsuariosTable usuarios) {
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
		               UsuariosTable updated = usuariosRepository.save(record);
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
