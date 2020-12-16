package org.safeNature.theyMatter.demo.repository;

import java.util.List;
import org.safeNature.theyMatter.demo.model.ProdutosTable;
import org.safeNature.theyMatter.demo.model.UsuariosTable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProdutosRepository extends JpaRepository<ProdutosTable, Long> {
	
	public List<ProdutosTable> findAllByNomeContainingIgnoreCase(String nome);

	public void save(UsuariosTable usuario);

}
