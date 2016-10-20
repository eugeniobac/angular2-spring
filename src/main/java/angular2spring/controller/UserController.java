package angular2spring.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import angular2spring.model.Role;
import angular2spring.model.User;
import angular2spring.repository.RoleRepository;
import angular2spring.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController extends  AbstractController{

	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody User add(@RequestBody User user) {
		String encryptedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
		user.setPassword(encryptedPassword);
		
		List<Role> roles = user.getRoles().stream().map(role -> roleRepository.findOne(role.getId()))
				.collect(Collectors.toList());

		user.setRoles(roles);
		setUpHistory(user);
		return repository.save(user);
	}

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public @ResponseBody List<User> list() {
		return (List<User>) repository.findAll();
	}

	@RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
	public @ResponseBody User find(@PathVariable Long id) {
		return repository.findOne(id);
	}

	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		repository.delete(id);
	}
}
