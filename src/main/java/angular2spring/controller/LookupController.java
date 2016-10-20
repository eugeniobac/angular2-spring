package angular2spring.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lookup")
public class LookupController {
	
	@Autowired
	private EntityManager entityManager;
	
	private static String PACKAGE_MODEL = "angular2spring.model.";
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@GetMapping("/list/{entityName}")
	public @ResponseBody List list(@PathVariable String entityName){
		try {
			Class entityClass = Class.forName(PACKAGE_MODEL + entityName);
			
			return new SimpleJpaRepository(entityClass, entityManager).findAll();
		} catch (ClassNotFoundException e) {
		}
		
		return new ArrayList();
	}
	
}
