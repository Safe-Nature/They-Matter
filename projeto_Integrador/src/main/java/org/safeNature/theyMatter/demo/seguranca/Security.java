package org.safeNature.theyMatter.demo.seguranca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {
	@Autowired
	private ImplementsUserDetailsService userDetailsService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.anyRequest().authenticated()
				.antMatchers("/").permitAll()

				//Permissões ENDPOINT usuario; ------------------------------------

				.antMatchers(HttpMethod.POST,"usuarios/post").permitAll()
				.antMatchers(HttpMethod.GET,"usuarios/todos").hasRole("ADMIN")
				.antMatchers(HttpMethod.DELETE,"usuarios/delete/{id}").hasRole("ADMIN")

				//-----------------------------------------------------------------

												//

				//Permissões dos ENDPOINTS da tabela produtos ----------------------------

				.antMatchers(HttpMethod.GET,"/produtos/todos").permitAll()
				.antMatchers(HttpMethod.GET,"/produtos/id/{id}").permitAll()
				.antMatchers(HttpMethod.GET,"/produtos/nome/{nome}").permitAll()
				.antMatchers(HttpMethod.POST, "/produtos/post").hasRole("ADMIN")
				.antMatchers(HttpMethod.PUT, "/produtos/put/{id}").hasRole("ADMIN")
				.antMatchers(HttpMethod.DELETE, "/produtos/delete/{id}").hasRole("ADMIN")

				//--------------------------------------------------------------------------

				.and().formLogin().permitAll()
				.and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.and().cors().and().csrf().disable();

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
		// outra configuração para caso a pessoa tente acessar o endereço protegido
		// usando uma das variaveis.
	}

}
