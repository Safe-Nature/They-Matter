package org.safeNature.theyMatter.demo.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Roles  implements GrantedAuthority{
	
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String nomeRole;
	
	@ManyToMany(mappedBy = "roles")
	@JsonIgnoreProperties("roles")
	private List<UsuariosTable> usuarios;
	
	
	@Override
	public String getAuthority() {
		return this.nomeRole;
	}


	public String getNomeRole() {
		return nomeRole;
	}


	public void setNomeRole(String nomeRole) {
		this.nomeRole = nomeRole;
	}
	

}
