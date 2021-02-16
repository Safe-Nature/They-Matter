package org.safeNature.theyMatter.demo.repository;

import java.util.List;
import org.safeNature.theyMatter.demo.model.Produtos;
import org.safeNature.theyMatter.demo.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProdutosRepository extends JpaRepository<Produtos, Long> {
	
	public List<Produtos> findAllByNomeContainingIgnoreCase(String nome);

}
