package org.safeNature.theyMatter.demo.controller;

import java.util.List;
import java.util.Optional;

import org.safeNature.theyMatter.demo.model.CategoriaTable;
import org.safeNature.theyMatter.demo.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/categorias")
public class CategoriaController { //CRUD METHODS ----------------------------------------------------------------\\
    
    @Autowired
    public CategoriaRepository repository; //Injeta o repositorio dentro dessa classe.

    //METODOS GET --------------------------------------------------------------\\

    @GetMapping("/todas")
    public ResponseEntity<List<CategoriaTable>> getAll() {
        return ResponseEntity.ok(repository.findAll());
    }
    @GetMapping("/{id}")
    public Optional<CategoriaTable> getById(@PathVariable Long id) {
        return repository.findById(id);
    }
    @GetMapping("/{nomeCat}")
    public ResponseEntity<List<CategoriaTable>> getByNome(@PathVariable String nomeCat) {
        return ResponseEntity.ok(repository.findAllByNomeCatContainingIgnoreCase(nomeCat)) ;
    }

    //FIM DOS METODOS GET --------------------------------------------------------\\

                                        //

    //METODO POST ----------------------------------------------------------------\\

    @PostMapping("/post")
    public CategoriaTable post(@RequestBody CategoriaTable categoria){
        return repository.save(categoria);
    }
    //-----------------------------------------------------------------------------\\

                                        //

    //METODO PUT/UPDATE------------------------------------------------------------\\

    @PutMapping("put/{id}")
    public CategoriaTable put(@PathVariable Long id, @RequestBody CategoriaTable categoria) {
        categoria.setId(id);
        repository.save(categoria);
        return categoria;
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
