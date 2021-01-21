package org.safeNature.theyMatter.demo.dto;

import org.safeNature.theyMatter.demo.model.Usuarios;

public class userLogin {
     
    private String nome;

    private String email;

    private String senha;

    private String token;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUsuario() {
        return email;
    }

    public void setUsuario(String usuario) {
        this.email = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

