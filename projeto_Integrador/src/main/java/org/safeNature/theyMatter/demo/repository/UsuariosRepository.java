package org.safeNature.theyMatter.demo.repository;

import java.util.List;
import java.util.Optional;

import org.safeNature.theyMatter.demo.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuarios, Long>{

	public List<Usuarios> findAllByNomeContainingIgnoreCase(String nome);
	public Optional<Usuarios> findByNome(String nome);

}