package org.safeNature.theyMatter.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="pedidos")
public class Pedidos {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    private boolean status;

    @Column
    @NotNull
    private Double total;

    @JsonIgnoreProperties("pedidos")
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuarios")
    public Usuarios usuario;

    @JsonIgnoreProperties("pedidos")
    @OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_produto")
	public List<Produtos> produto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Usuarios getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuarios usuario) {
        this.usuario = usuario;
    }

    public List<Produtos> getProduto() {
        return produto;
    }

    public void setProduto(List<Produtos> produto) {
        this.produto = produto;
    }
   
}
