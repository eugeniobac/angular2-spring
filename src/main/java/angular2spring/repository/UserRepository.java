package angular2spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import angular2spring.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);
}
