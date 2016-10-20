package angular2spring.common.util;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import angular2spring.model.User;
import angular2spring.model.core.AbstractEntity;
import angular2spring.model.core.History;
import angular2spring.repository.UserRepository;

@Component
public class CommonHelper {

	@Autowired
	private UserRepository userRepository;

	public void setUpHistory(AbstractEntity entity) {
		String userName = getUsernameOfAuthenticatedUser();

		User user = userRepository.findByUsername(userName);

		History history = entity.getHistory();
		Date now = new Date();
		if (history == null) {
			history = new History();

			history.setCreateUser(user);
			history.setCreateDate(now);
		} else if (history.getCreateUser() == null) {
			history.setCreateUser(user);
			history.setCreateDate(now);
		}
		// always update these fields
		history.setUpdateUser(user);
		history.setUpdateDate(now);
		entity.setHistory(history);
	}
	
	private String getUsernameOfAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
 
        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }
 
        return ((org.springframework.security.core.userdetails.User) authentication.getPrincipal()).getUsername();
    }

}