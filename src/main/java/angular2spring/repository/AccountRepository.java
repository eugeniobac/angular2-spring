package angular2spring.repository;

import org.springframework.data.repository.CrudRepository;

import angular2spring.model.Account;

public interface AccountRepository extends CrudRepository<Account, Long> {

	
}
