package org.safeNature.theyMatter.demo.repository;

import java.util.List;

import org.safeNature.theyMatter.demo.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	public List<Categoria> findAllByNomeContainingIgnoreCase(String nome);
}
