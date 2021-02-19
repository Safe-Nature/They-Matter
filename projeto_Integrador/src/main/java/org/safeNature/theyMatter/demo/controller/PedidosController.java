package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Pedidos;
import org.safeNature.theyMatter.demo.repository.PedidosRepository;
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
@RequestMapping("/pedido")
public class PedidosController {
    
    @Autowired
    public PedidosRepository pedidosRepository;

    @GetMapping("/todos")
	public ResponseEntity<List<Pedidos>>getAll() {
        return ResponseEntity.ok(pedidosRepository.findAll());
    }
    @GetMapping("/id/{id}")
	public ResponseEntity<Pedidos> getById(@PathVariable Long id) {
		return pedidosRepository.findById(id).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

    @PostMapping("/add")
    public ResponseEntity<Pedidos> post(@RequestBody Pedidos pedidos) {
        return ResponseEntity.status(HttpStatus.CREATED).body(pedidosRepository.save(pedidos));
    }
}
