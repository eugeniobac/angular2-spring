package angular2spring.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.sling.commons.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import angular2spring.model.User;
import angular2spring.repository.UserRepository;

@RestController
public class CredentialsController {
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/getUserCredentials", produces =  { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody User getUserCredentials(HttpServletRequest request) throws JSONException{
		String username = request.getUserPrincipal().getName();
		
		return userRepository.findByUsername(username);
	}
}
