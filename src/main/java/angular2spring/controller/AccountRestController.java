package angular2spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import angular2spring.model.Account;
import angular2spring.repository.AccountRepository;
import angular2spring.service.AccountService;

@RestController
@RequestMapping("/account")
public class AccountRestController extends AbstractController  {

	@Autowired
	private AccountRepository accountRepository;
	

	
	
    @Autowired
    private AccountService accountService;

	@RequestMapping(value = "/add", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> add(@RequestBody Account input) 
	{
		setUpHistory(input);
	
		Account account = accountRepository.save(input);
		return new ResponseEntity<Account>(account, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public @ResponseBody List<Account> list(){
		return (List<Account>) accountRepository.findAll();
	}

	@RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
	public @ResponseBody Account find(@PathVariable Long id){
		return accountRepository.findOne(id);
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public @ResponseBody void delete(@PathVariable Long id){
		accountRepository.delete(id);
	}
	
	@PostMapping(value = "/parseFile", produces =  { MediaType.APPLICATION_JSON_VALUE })
    public @ResponseBody String handleFileUpload(@RequestParam("file") MultipartFile file) {
		 return accountService.parseXFile(file);
    }
}
