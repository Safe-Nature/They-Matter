package org.safeNature.theyMatter.demo.controller;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Pedidos;
import org.safeNature.theyMatter.demo.repository.PedidosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/pedido")
public class PedidosController {
    
    @Autowired
    public PedidosRepository pedidosRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Pedidos>> get(@RequestBody Pedidos pedidos) {
        return ResponseEntity.ok(pedidosRepository.findAll());
    }
}
