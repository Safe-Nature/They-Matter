package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Produtos;
import org.safeNature.theyMatter.demo.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/produtos")
public class ProdutosController {//CRUD METHODS ----------------------------------------------------------------\\
    
	@Autowired
	public ProdutosRepository produtosRepository;//Injeta o repositorio dentro dessa classe.

    //METODOS GET --------------------------------------------------------------\\

	@GetMapping("/todos")
	public ResponseEntity<List<Produtos>>getAll() {
        return ResponseEntity.ok(produtosRepository.findAll());
    }

	@GetMapping("/id/{id}")
	public ResponseEntity<Produtos> getById(@PathVariable Long id) {
		return produtosRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Produtos>> getByNome(@PathVariable String nome) {
		return ResponseEntity.ok(produtosRepository.findAllByNomeContainingIgnoreCase(nome));
	}

	// --------------------------------------------------------\\

	//

	//METODO POST ----------------------------------------------------------------\\

	@PostMapping("/post")
	public ResponseEntity<Produtos> post(@RequestBody Produtos produtos) {
		return ResponseEntity.status(HttpStatus.CREATED).body(produtosRepository.save(produtos));
	}
	// -----------------------------------------------------------------------------\\

	//

	//METODO PUT/UPDATE------------------------------------------------------------\\

	@PutMapping("/update/{id}")
	public ResponseEntity<Produtos> update(@PathVariable Long id, @RequestBody Produtos produtos) {
		return produtosRepository.findById(id)
		           .map(record -> {
		        	   if(produtos.getNome() != null) {
		        		   record.setNome(produtos.getNome());
		        	   }
		        	   if(produtos.getCategoria() != null) {
		        		   record.setCategoria(produtos.getCategoria());
		        	   }
		        	   if(produtos.getEstoque() != 0) {
		        		   record.setEstoque(produtos.getEstoque());
		        	   }
					   if(produtos.getImagem() != null) {
						   record.setImagem(produtos.getImagem());
					   }
					   if(produtos.getDescricao() != null) {
						   record.setDescricao(produtos.getDescricao());
					   }
					   if(produtos.getParcelamento() != null) {
						   record.setParcelamento(produtos.getParcelamento());
					   }
					   if(produtos.getTamanho() != null) {
						   record.setTamanho(produtos.getTamanho());
					   }
					   if(produtos.getPreco() != 0) {
						   record.setPreco(produtos.getPreco());
					   }
		               Produtos updated = produtosRepository.save(record);
		               return ResponseEntity.ok().body(updated);
				   }).orElse(ResponseEntity.notFound().build());
				}

	// ------------------------------------------------------------------------------\\

	// 

	//METODO DELETE -----------------------------------------------------------------\\

	@DeleteMapping("/delete/{id}")
	public String deletar(@PathVariable Long idProduto) {
		try {
			produtosRepository.deleteById(idProduto);
	            return "Sucesso";
	        } catch(Exception e) {
	            return "Erro: "+ e.getMessage();
	        }
	    }

	    //---------------------------------------------------------------------------------\\
	} // -----------------------------------------------------------------------------------\\

	

