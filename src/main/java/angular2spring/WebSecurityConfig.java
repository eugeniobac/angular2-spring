package angular2spring;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private DataSource dataSource;
	
	@Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.csrf().disable();
    	
    	http.authorizeRequests()
    	 	.antMatchers("/bower_components/**").permitAll()
    	 	.anyRequest().authenticated()
            .and()
            	.formLogin()
                .loginPage("/login")
                .permitAll()
            .and()
            	.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login?logout")
                .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    	auth.jdbcAuthentication().dataSource(this.dataSource)
    	.passwordEncoder(passwordEncoder())
    	.usersByUsernameQuery("select username, password, active from app_user where username = ?")
    	.authoritiesByUsernameQuery("SELECT appuser.username, role.code from app_user appuser INNER JOIN app_user_roles aur on aur.app_user_id = appuser.id INNER JOIN role role on role.id = aur.roles_id where appuser.username = ?");
    }
    
    @Bean
	public PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}
}
