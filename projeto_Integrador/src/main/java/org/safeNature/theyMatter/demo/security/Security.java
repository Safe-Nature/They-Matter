package org.safeNature.theyMatter.demo.security;

import org.safeNature.theyMatter.demo.model.Usuarios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.Http2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService);
	}
	
	@Bean
	PasswordEncoder PasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/").permitAll()

				//Permissões ENDPOINT usuario; ------------------------------------

				.antMatchers(HttpMethod.POST,"usuario/logar").permitAll()
				.antMatchers(HttpMethod.POST,"usuario/cadastrar").permitAll()
				.antMatchers(HttpMethod.GET,"usuario/todos").hasRole("ADMIN")
				.antMatchers(HttpMethod.DELETE,"usuario/delete/{id}").hasRole("USER")
				.antMatchers(HttpMethod.PUT, "usuario/{id}").hasRole("USER")
				//-----------------------------------------------------------------
			
				//Permissões dos ENDPOINTS da tabela produtos ----------------------------
				.antMatchers("/swagger-ui.html").permitAll()
				.antMatchers(HttpMethod.GET,"/produtos/todos").permitAll()
				.antMatchers(HttpMethod.GET,"/produtos/id/{id}").permitAll()
				.antMatchers(HttpMethod.GET,"/produtos/nome/{nome}").permitAll()
				.antMatchers(HttpMethod.GET,"/categorias/{nome}").permitAll()
				//--------------------------------------------------------------------------

				.anyRequest().permitAll()
          	  	.and().httpBasic()
				.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and().cors()
            	.and().csrf().disable();

	}
}
