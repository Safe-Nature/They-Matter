package org.safeNature.theyMatter.demo.repository;

import java.util.List;
import org.safeNature.theyMatter.demo.model.ProdutosTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutosRepository extends JpaRepository<ProdutosTable, Long> {
	public List<ProdutosTable> findAllByNomeContainingIgnoreCase(String nome);
	public List<ProdutosTable> findAllByTamanhoContainingIgnoreCase(String tamanho);
	
}
