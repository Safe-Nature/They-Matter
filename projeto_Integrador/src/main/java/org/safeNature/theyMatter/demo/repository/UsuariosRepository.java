package org.safeNature.theyMatter.demo.repository;

import java.util.List;

import org.safeNature.theyMatter.demo.model.UsuariosTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<UsuariosTable, Long>{

	public List<UsuariosTable> findAllByNomeContainingIgnoreCase(String nome);
	
}


