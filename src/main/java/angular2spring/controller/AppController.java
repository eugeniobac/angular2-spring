package angular2spring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class AppController {
	private static final String LOGIN_PATH = "/login";

	@RequestMapping(value = "/{path:[^\\.]*}")
	public String redirect(HttpServletRequest request) {
		if(request.getServletPath().equals(LOGIN_PATH)) return LOGIN_PATH;
		
		return "forward:/";
	}
	
	@RequestMapping(value = "/{[path:[^\\.]*}/{[id:[^\\.]*}")
	public String redirectWithPathParam(HttpServletRequest request) {
		return "forward:/";
	}
}
