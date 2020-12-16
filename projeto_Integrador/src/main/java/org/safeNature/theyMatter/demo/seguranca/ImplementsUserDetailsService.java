package org.safeNature.theyMatter.demo.seguranca;

import java.util.List;

import javax.transaction.Transactional;

import org.safeNature.theyMatter.demo.model.UsuariosTable;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class ImplementsUserDetailsService implements UserDetailsService {
@Autowired
private UsuariosRepository usuariosRepository;

@Override
public UserDetails loadUserByUsername(String nome) throws UsernameNotFoundException{
	List<UsuariosTable> usuario = usuariosRepository.findAllByNomeContainingIgnoreCase(nome);
	
	if(usuario == null) {
		throw new UsernameNotFoundException("Usuario(a) não encontrado(a)!");
	}
	return new User(((UsuariosTable) usuario).getNome(), ((UsuariosTable) usuario).getPassword(), true, true, true, true, ((UsuariosTable) usuario).getAuthorities());
}
	
	

	
}
