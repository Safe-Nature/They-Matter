package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Location;
import org.safeNature.theyMatter.demo.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/location")
public class LocationController { //CRUD METHODS ----------------------------------------------------------------\\
    
    @Autowired
    public LocationRepository locationRepository; //Injeta o repositorio dentro dessa classe.

    //METODOS GET --------------------------------------------------------------\\

    @GetMapping("/todas")
    public ResponseEntity<List<Location>> getAll() {
        return ResponseEntity.ok(locationRepository.findAll());
    }
    
    @GetMapping("/nome/{nome}")
    public ResponseEntity<List<Location>> getByNome(@PathVariable String nome) {
        return ResponseEntity.ok(locationRepository.findAllByNomeContainingIgnoreCase(nome));
    }

   

    // METODO POST
    // ----------------------------------------------------------------\\

    @PostMapping("/post")
    public ResponseEntity<Location> post(@RequestBody Location location) {
        return ResponseEntity.status(HttpStatus.CREATED).body(locationRepository.save(location));
    }
    // -----------------------------------------------------------------------------\\

  

} // -----------------------------------------------------------------------------------\\
