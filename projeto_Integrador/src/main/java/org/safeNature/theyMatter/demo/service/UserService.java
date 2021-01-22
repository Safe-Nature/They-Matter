package org.safeNature.theyMatter.demo.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.safeNature.theyMatter.demo.dto.userLogin;
import org.safeNature.theyMatter.demo.model.Usuarios;
import org.safeNature.theyMatter.demo.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UsuariosRepository usuariosRepository;

    public Usuarios userRegister(Usuarios user) {

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String passwordEncoded = encoder.encode(user.getSenha());
        user.setSenha(passwordEncoded);



        return usuariosRepository.save(user);
    }

    public Optional<userLogin> login(Optional<userLogin> user){

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        Optional<Usuarios> usuario = usuariosRepository.findByNome(user.get().getUsuario());

        if(usuario.isPresent()) {

            if(encoder.matches(user.get().getSenha(), usuario.get().getSenha())) {

                String auth = user.get().getUsuario() + ":" + user.get().getSenha();
                byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
                String authHeader = "Basic " + new String(encodedAuth);

                user.get().setToken(authHeader);
                user.get().setNome(usuario.get().getNome());
                user.get().setSenha(usuario.get().getSenha());
                user.get().setEmail(usuario.get().getEmail());
                user.get().setId(usuario.get().getId());

                return user;
            }
        }
        return null;
    }
}
