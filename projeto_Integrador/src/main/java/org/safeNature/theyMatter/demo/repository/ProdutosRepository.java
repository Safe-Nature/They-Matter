package org.safeNature.theyMatter.demo.repository;

import java.util.List;
import org.safeNature.theyMatter.demo.model.ProdutosTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProdutosRepository extends JpaRepository<ProdutosTable, Long> {
	
	public List<ProdutosTable> findAllByNomeContainingIgnoreCase(String nome);

}
