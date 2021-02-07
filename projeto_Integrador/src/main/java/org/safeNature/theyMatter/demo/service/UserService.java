package org.safeNature.theyMatter.demo.service;

import java.nio.charset.Charset;
import org.apache.commons.codec.binary.Base64;
import org.safeNature.theyMatter.demo.dto.UserLogin;
import org.safeNature.theyMatter.demo.model.Usuarios;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UsuariosRepository repository;

    public Usuarios CadastrarUsuario(Usuarios usuario) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String senhaEnconder = encoder.encode(usuario.getSenha());
        usuario.setSenha(senhaEnconder);

        return repository.save(usuario);
    }

    public Optional<UserLogin> Logar(Optional<UserLogin> user) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Optional<Usuarios> usuario = repository.findByNome(user.get().getNome());

        if(usuario.isPresent()) {
            if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {
                String auth = user.get().getNome() + ":" + user.get().getSenha(); 
                byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
                String authHeader = "Basic " + new String(encodedAuth);

                user.get().setToken(authHeader);
                user.get().setNome(usuario.get().getNome());
                user.get().setEmail(usuario.get().getEmail());
                user.get().setSenha(usuario.get().getSenha());
                user.get().setId(usuario.get().getId());

                return user;
            }
        }
        
        return user;
    }
}