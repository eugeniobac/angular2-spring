package angular2spring.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import angular2spring.model.core.AbstractEntity;
import angular2spring.model.core.History;

@Entity(name = "APP_USER")
public class User extends AbstractEntity {
	private Boolean active = true;
	private String name;
	private String username;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	private List<Role> roles = new ArrayList<Role>();

	@Override
	@JsonIgnore
	public History getHistory() {
		return super.getHistory();
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@ManyToMany
	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean isActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

}
