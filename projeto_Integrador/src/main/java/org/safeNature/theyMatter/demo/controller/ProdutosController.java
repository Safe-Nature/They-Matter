package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.CategoriaTable;
import org.safeNature.theyMatter.demo.model.ProdutosTable;
import org.safeNature.theyMatter.demo.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/produtos")
public class ProdutosController {//CRUD METHODS ----------------------------------------------------------------\\
    
	@Autowired
	public ProdutosRepository repository;//Injeta o repositorio dentro dessa classe.

    //METODOS GET --------------------------------------------------------------\\

	@GetMapping("/todas")
	public ResponseEntity<List<ProdutosTable>> getAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<ProdutosTable> getById(@PathVariable Long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	 @GetMapping("/nome/{nome}")
	    public ResponseEntity<List<ProdutosTable>> getByNome(@PathVariable String nome) {
	        return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome)) ;
	    }
	 
	 @GetMapping("/tamanho/{tamanho}")
	    public ResponseEntity<List<ProdutosTable>> getByTamanho(@PathVariable String nome) {
	        return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome)) ;
	    }

	 //FIM DOS METODOS GET --------------------------------------------------------\\

	 												//

	 //METODO POST ----------------------------------------------------------------\\

	 @PostMapping("/post")
	    public ProdutosTable post(@RequestBody ProdutosTable produtos){
	        return repository.save(produtos);
	    }
	    //-----------------------------------------------------------------------------\\

	                                        //

	    //METODO PUT/UPDATE------------------------------------------------------------\\

	    @PutMapping("put/{id}")
	    public ProdutosTable put(@PathVariable Long id, @RequestBody ProdutosTable produtos) {
	        produtos.setId(id);
	        repository.save(produtos);
	        return produtos;
	    }

	    //------------------------------------------------------------------------------\\

	                                        //

	    //METODO DELETE -----------------------------------------------------------------\\

	    @DeleteMapping("/delete/{id}")
	    public String deletar(@PathVariable Long id){
	        try{
	            repository.deleteById(id);
	            return "Sucesso";
	        } catch(Exception e) {
	            return "Erro: "+ e.getMessage();
	        }
	    }

	    //---------------------------------------------------------------------------------\\
	} // -----------------------------------------------------------------------------------\\

	

