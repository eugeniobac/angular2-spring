package angular2spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import angular2spring.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
