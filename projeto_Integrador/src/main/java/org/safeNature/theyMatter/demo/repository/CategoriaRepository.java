package org.safeNature.theyMatter.demo.repository;

import java.util.List;

import org.safeNature.theyMatter.demo.model.CategoriaTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<CategoriaTable, Long> {
	public List<CategoriaTable> findAllByNomeContainingIgnoreCase(String nome);
}
