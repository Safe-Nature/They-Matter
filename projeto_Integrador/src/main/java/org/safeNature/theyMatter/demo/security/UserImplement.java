package org.safeNature.theyMatter.demo.security;

import java.util.Optional;

import org.safeNature.theyMatter.demo.model.Usuarios;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserImplement implements UserDetailsService {

    @Autowired
    private UsuariosRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException, DataAccessException {
        Optional<Usuarios> user = userRepository.findByNome(userName);
		user.orElseThrow(()-> new UsernameNotFoundException(userName + " not found."));
		
		return user.map(ImplementsUserDetailsService::new).get();
	}
}
