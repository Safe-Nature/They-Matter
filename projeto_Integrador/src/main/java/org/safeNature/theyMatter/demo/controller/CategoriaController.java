package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Categoria;
import org.safeNature.theyMatter.demo.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/categorias")
public class CategoriaController { //CRUD METHODS ----------------------------------------------------------------\\
    
    @Autowired
    public CategoriaRepository categoriaRepository; //Injeta o repositorio dentro dessa classe.

    //METODOS GET --------------------------------------------------------------\\

    @GetMapping("/todas")
    public ResponseEntity<List<Categoria>> getAll() {
        return ResponseEntity.ok(categoriaRepository.findAll());
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Categoria> getById(@PathVariable Long id) {
        return categoriaRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{nome}")
    public ResponseEntity<List<Categoria>> getByNome(@PathVariable String nome) {
        return ResponseEntity.ok(categoriaRepository.findAllByNomeContainingIgnoreCase(nome));
    }

    // FIM DOS METODOS GET
    // --------------------------------------------------------\\

    //

    // METODO POST
    // ----------------------------------------------------------------\\

    @PostMapping("/post")
    public ResponseEntity<Categoria> post(@RequestBody Categoria categoria) {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoriaRepository.save(categoria));
    }
    // -----------------------------------------------------------------------------\\

    //

    // METODO
    // PUT/UPDATE------------------------------------------------------------\\

    @PutMapping("put/{id}")
    public Categoria put(@PathVariable Long id, @RequestBody Categoria categoria) {
        categoria.setId(id);
        categoriaRepository.save(categoria);
        return categoria;
    }

    // ------------------------------------------------------------------------------\\

    //

    // METODO DELETE
    // -----------------------------------------------------------------\\

    @DeleteMapping("/delete/{id}")
    public String deletar(@PathVariable Long id) {
        try {
            categoriaRepository.deleteById(id);
            return "Sucesso";
        } catch(Exception e) {
            return "Erro: "+ e.getMessage();
        }
    }

    //---------------------------------------------------------------------------------\\
} // -----------------------------------------------------------------------------------\\
