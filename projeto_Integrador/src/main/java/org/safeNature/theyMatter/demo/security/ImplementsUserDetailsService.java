package org.safeNature.theyMatter.demo.security;

import java.util.Collection;
import org.safeNature.theyMatter.demo.model.Usuarios;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class ImplementsUserDetailsService implements UserDetails {

    private static final long serialVersionUID = 1L;

    private String userName;
    private String password;

    public ImplementsUserDetailsService(Usuarios user) {
    	this.userName = user.getNome();
    	this.password = user.getSenha();
    }

    public ImplementsUserDetailsService(){}

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
